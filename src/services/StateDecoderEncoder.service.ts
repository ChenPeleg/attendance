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

    byteCodeEncode(state: AttendanceStoreShare): string {
        const allChildren = this.getChildrenList();
        const childrenByte: { id: number, childByteStatus: ChildByteStatus }[] = []
        for (const child of allChildren) {
            const childFromState = state.attendance.find(c => c.id === child.id);
            if (childFromState) {
                childrenByte.push({
                    id: parseInt(child.id),
                    childByteStatus: this.getChildByteStatus(childFromState)
                })
            } else {
                childrenByte.push({
                    id: parseInt(child.id),
                    childByteStatus: ChildByteStatus.PresentAndNotChecked
                })
            }
        }


        return `${state.attendance.length}`
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
