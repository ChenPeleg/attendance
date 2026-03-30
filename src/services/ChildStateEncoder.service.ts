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

/**
 * Service responsible for encoding and decoding child attendance state.
 * Uses bit-packing to store child IDs (5 bits) and status (2 bits).
 * Maximum supported: 32 children (2^5).
 */
export class ChildStateEncoderService extends AbstractBaseService {
    // Constants definition
    private static readonly ID_BITS = 5;       // Max 31
    private static readonly ENUM_BITS = 2;     // Max 3
    private static readonly ENUM_MASK = (1 << ChildStateEncoderService.ENUM_BITS) - 1; // 0b11 (3 in decimal)

    constructor(provider: ServicesResolver) {
        super(provider);
    }

    /**
     * Encodes a child ID and status into a single byte.
     * @param id - Child ID (0-31)
     * @param enumVal - Status enum value (0-3)
     * @returns Packed byte containing both values
     * @throws Error if values are out of range
     */
    private encodeData(id: RangedId, enumVal: number): number {
        const ID_BITS = ChildStateEncoderService.ID_BITS;
        const ENUM_BITS = ChildStateEncoderService.ENUM_BITS;

        if (id < 0 || id >= (1 << ID_BITS)) {
            throw new Error(`ID must be between 0 and ${(1 << ID_BITS) - 1}`);
        }
        if (enumVal < 0 || enumVal >= (1 << ENUM_BITS)) {
            throw new Error(`Enum must be between 0 and ${(1 << ENUM_BITS) - 1}`);
        }

        return (id << ENUM_BITS) | enumVal;
    }

    /**
     * Decodes a packed byte into child ID and status.
     * @param packedByte - Byte containing packed data
     * @returns Object with enumVal and id
     */
    private decodeData(packedByte: number) {
        return {
            enumVal: packedByte & ChildStateEncoderService.ENUM_MASK,
            id: (packedByte >> ChildStateEncoderService.ENUM_BITS) as RangedId
        };
    }

    /**
     * Encodes child attendance state into a base64 string.
     * @param state - Attendance state to encode
     * @param extraChildren - Additional children to include
     * @returns Base64 encoded string
     */
    public encode(state: AttendanceStoreShare, extraChildren: {id: RangedId, name: string, manuallyAdded: true}[] = []): string {
        const allChildren = [...this.getChildrenList(), ...extraChildren];
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

    /**
     * Decodes a base64 string into child attendance state.
     * @param encodedState - Base64 encoded string
     * @param extraChildren - Additional children to include
     * @returns Decoded attendance state
     * @throws Error if decoding fails
     */
    public decode(encodedState: string, extraChildren: {id: RangedId, name: string, manuallyAdded: true}[] = []): AttendanceStoreShare {
        try {
            const binaryString = atob(encodedState);
            const byteArray = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                byteArray[i] = binaryString.charCodeAt(i);
            }

            const allChildren = [...this.getChildrenList(), ...extraChildren];
            const attendanceMap = new Map(allChildren.map(c => [c.id, { ...c } as ChildStatus]));

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
