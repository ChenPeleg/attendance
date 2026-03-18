import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {AttendanceStoreShare} from '../models/AttendanceStore.ts';
import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {StoreService} from './Store.service.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import {PresentToday} from '../models/presentToday.ts';

export enum ChildByteStatus {
    PresentAndNotChecked = 1, PresentAndChecked = 2, PresentAndUnchecked = 3, NotPresent = 4,
}

export class StateDecoderEncoderService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }
    // type Ran<T extends number> = number extends T ? number :_Range<T, []>;
    // type _Range<T extends number, R extends unknown[]> = R['length'] extends T ? R[number] : _Range<T, [R['length'], ...R]>;
    //
    // type R5 = Ran<998>
    // const a: R5 = 3 // correct
    // const b: R5 = 999 // wrong
    // childThinToByteEncode( id : number, status : 0 | 1 |2 |3): number {
    //
    // }

    byteCodeEncode(state: AttendanceStoreShare): string {
        const allChildren = this.getChildrenList();
        const childrenByte: { id: number, childByteStatus: ChildByteStatus }[] = []
        for (const child of allChildren) {
            const childFromState = state.attendance.find(c => c.id === child.id);
            childrenByte.push({
                id: child.id,
                childByteStatus: childFromState ? this.getChildByteStatus(childFromState) : ChildByteStatus.PresentAndNotChecked
            })
        }
        const byteArray = new Int8Array(allChildren.length * 2)
        for (let i = 0; i < childrenByte.length; i++) {
            byteArray[i * 2] = childrenByte[i].id;
            byteArray[i * 2 + 1] = childrenByte[i].childByteStatus;
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
