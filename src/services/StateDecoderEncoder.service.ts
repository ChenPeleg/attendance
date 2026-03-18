import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {AttendanceStoreShare} from '../models/AttendanceStore.ts';
import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {StoreService} from './Store.service.ts';

export class StateDecoderEncoderService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }

    private getInitialState()  {
        const initialState =  this.servicesResolver.getService(StoreService).initialState
        return initialState.attendance;
    }

    byteCodeEncode (state: AttendanceStoreShare): string {
        const initialState =  this.getInitialState();
        if (initialState.length  > 10) {
            return  '10'
        }
        return  `${state.attendance.length}`
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
}
