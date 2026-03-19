import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {AttendanceStoreShare} from '../models/AttendanceStore.ts';
import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {StoreService} from './Store.service.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import {PresentToday} from '../models/presentToday.ts';
import {RangedId} from '../models/RangedId.ts';

export enum ChildByteStatus {
    PresentAndNotChecked = 0, PresentAndChecked = 1, PresentAndUnchecked = 2, NotPresent = 3,
}

export class StateDecoderEncoderService extends AbstractBaseService {
    // Constants definition
    private static readonly ID_BITS = 5;       // Max 31
    private static readonly ENUM_BITS = 2;     // Max 3
    private static readonly ENUM_MASK = (1 << StateDecoderEncoderService.ENUM_BITS) - 1; // 0b11 (3 in decimal)

    constructor(provider: ServicesResolver) {
        super(provider);
    }

    private encodeData(id: RangedId, enumVal: number): number {
        const ID_BITS = StateDecoderEncoderService.ID_BITS;
        const ENUM_BITS = StateDecoderEncoderService.ENUM_BITS;

        if (id < 0 || id >= (1 << ID_BITS)) {
            throw new Error(`ID must be between 0 and ${(1 << ID_BITS) - 1}`);
        }
        if (enumVal < 0 || enumVal >= (1 << ENUM_BITS)) {
            throw new Error(`Enum must be between 0 and ${(1 << ENUM_BITS) - 1}`);
        }

        return (id << ENUM_BITS) | enumVal;
    }

    private decodeData(packedByte: number) {
        return {
            enumVal: packedByte & StateDecoderEncoderService.ENUM_MASK,
            id: (packedByte >> StateDecoderEncoderService.ENUM_BITS) as RangedId
        };
    }

    public encode(state: AttendanceStoreShare): string {
        const allChildren = this.getChildrenList();
        const childrenByte: { id: RangedId, childByteStatus: ChildByteStatus }[] = []
        for (const child of allChildren) {
            const childFromState = state.attendance.find(c => c.id === child.id);
            childrenByte.push({
                id: child.id,
                childByteStatus: childFromState ? this.getChildByteStatus(childFromState) : ChildByteStatus.PresentAndNotChecked
            })
        }
        const byteArray = new Uint8Array(allChildren.length);
        for (let i = 0; i < childrenByte.length; i++) {
            byteArray[i] = this.encodeData(childrenByte[i].id, childrenByte[i].childByteStatus);
        }
        
        return btoa(String.fromCharCode(...byteArray));
    }

    public decode(encodedState: string): AttendanceStoreShare {
        try {
            const binaryString = atob(encodedState);
            const byteArray = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                byteArray[i] = binaryString.charCodeAt(i);
            }

            const allChildren = this.getChildrenList();
            const attendanceMap = new Map(allChildren.map(c => [c.id, { ...c }]));

            for (let i = 0; i < byteArray.length; i++) {
                const { id, enumVal } = this.decodeData(byteArray[i]);
                const child = attendanceMap.get(id as RangedId);
                if (child) {
                    const status = this.getChildStatusFromByteStatus(enumVal);
                    child.presentToday = status.presentToday;
                    child.checkedIn = status.checkedIn;
                }
            }

            return {
                attendance: Array.from(attendanceMap.values()),
                history: []
            };
        } catch (e) {
            console.error('Failed to decode state', e);
            throw e;
        }
    }

    public encodeTime(current: number, history: number[]): string {
        const FIVE_MINUTES = 5 * 60 * 1000;
        const timestamps = [current, ...history].map(ts => Math.round(ts / FIVE_MINUTES));
        const buffer = new ArrayBuffer(timestamps.length * 2);
        const view = new DataView(buffer);
        timestamps.forEach((ts, index) => {
            view.setUint16(index * 2, ts & 0xFFFF, true);
        });
        const byteArray = new Uint8Array(buffer);
        return btoa(String.fromCharCode(...byteArray));
    }

    public decodeTime(encodedState: string): { current: number, history: number[] } {
        try {
            const binaryString = atob(encodedState);
            const byteArray = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                byteArray[i] = binaryString.charCodeAt(i);
            }
            const view = new DataView(byteArray.buffer);
            const timestamps: number[] = [];

            const FIVE_MINUTES = 5 * 60 * 1000;
            const now = Date.now();
            const currentIntervals = Math.round(now / FIVE_MINUTES);
            const highBits = currentIntervals & ~0xFFFF;
            // Buffer to handle clock skew (sender slightly in future relative to receiver)
            // or if the timestamp is legitimately slightly in the future.
            // 288 * 5 mins = 24 hours.
            const FUTURE_BUFFER = 288;

            for (let i = 0; i < byteArray.length / 2; i++) {
                const lowBits = view.getUint16(i * 2, true);
                let reconstructed = highBits | lowBits;

                // If reconstructed is significantly in the future relative to now,
                // it implies the lowBits correspond to the previous cycle of highBits.
                // (e.g. now is just past a 65536 boundary, but timestamp is from just before it)
                if (reconstructed > currentIntervals + FUTURE_BUFFER) {
                    reconstructed -= 0x10000;
                }

                timestamps.push(reconstructed * FIVE_MINUTES);
            }

            if (timestamps.length === 0) {
                return { current: 0, history: [] };
            }

            return {
                current: timestamps[0],
                history: timestamps.slice(1)
            };
        } catch (e) {
            console.error('Failed to decode time', e);
            throw e;
        }
    }

    private getChildrenList() {
        const initialState = this.servicesResolver.getService(StoreService).initialState
        return initialState.attendance;
    }

    private getChildStatusFromByteStatus(status: ChildByteStatus): { presentToday: PresentToday, checkedIn: boolean } {
        switch (status) {
            case ChildByteStatus.PresentAndChecked:
                return {presentToday: PresentToday.Yes, checkedIn: true};
            case ChildByteStatus.PresentAndUnchecked:
                return {presentToday: PresentToday.Yes, checkedIn: false};
            case ChildByteStatus.NotPresent:
            case ChildByteStatus.PresentAndNotChecked:
            default:
                return {presentToday: PresentToday.No, checkedIn: false};
        }

    }

    private getChildByteStatus(childStatus: ChildStatus): ChildByteStatus {
        // return the enum
        switch (childStatus.presentToday) {
            case PresentToday.No:
                return ChildByteStatus.NotPresent;
            case PresentToday.Yes:
            default:
                return childStatus.checkedIn ? ChildByteStatus.PresentAndChecked : ChildByteStatus.PresentAndUnchecked;


        }


    }
}
