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
// הגדרת המגבלות (Constants)
const ID_BITS = 5;       // מקסימום 31
const ENUM_BITS = 2;     // מקסימום 3
const ENUM_MASK = (1 << ENUM_BITS) - 1; // 0b11 (3 בדצימלית)


function encodeData(id: number, enumVal: number): number {
    // ולידציה בסיסית
    if (id < 0 || id >= (1 << ID_BITS)) {
        throw new Error(`ID must be between 0 and ${(1 << ID_BITS) - 1}`);
    }
    if (enumVal < 0 || enumVal >= (1 << ENUM_BITS)) {
        throw new Error(`Enum must be between 0 and ${(1 << ENUM_BITS) - 1}`);
    }

    return (id << ENUM_BITS) | enumVal;
}


function decodeData(packedByte: number) {
    return {
        enumVal: packedByte & ENUM_MASK,
        id: packedByte >> ENUM_BITS
    };
}




export class StateDecoderEncoderService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }


    byteCodeEncode(state: AttendanceStoreShare): string {
        const allChildren = this.getChildrenList();
        const childrenByte: { id: RangedId, childByteStatus: ChildByteStatus }[] = []
        for (const child of allChildren) {
            const childFromState = state.attendance.find(c => c.id === child.id);
            childrenByte.push({
                id: child.id,
                childByteStatus: childFromState ? this.getChildByteStatus(childFromState) : ChildByteStatus.PresentAndNotChecked
            })
        }
        const byteArray = new Int8Array(allChildren.length )
        for (let i = 0; i < childrenByte.length; i++) {
            byteArray[i ] = encodeData(childrenByte[i].id, childrenByte[i].childByteStatus);
        }
        const base64FromByteArray = btoa(String.fromCharCode(...byteArray));



        return `${base64FromByteArray}`
    }

    public encode(state: AttendanceStoreShare): string {
        const jsonState = JSON.stringify(state);
        return btoa(encodeURIComponent(jsonState));
    }

    public decode(encodedState: string): AttendanceStoreShare {
        try {
            const jsonState = decodeURIComponent(atob(encodedState));
            const parsed: any = JSON.parse(jsonState);

            return {
                attendance: Array.isArray(parsed?.attendance) ? parsed.attendance : [],
                history: Array.isArray(parsed?.history) ? parsed.history : []
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
