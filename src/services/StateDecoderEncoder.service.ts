import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {AttendanceStoreShare} from '../models/AttendanceStore.ts';
import {ServicesResolver} from './provider/ServiceResolverClass.ts';

export class StateDecoderEncoderService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }

    public encode(state: AttendanceStoreShare): string {
        const jsonState = JSON.stringify(state);
        // encodeURIComponent to handle unicode characters, then btoa to base64
        return btoa(encodeURIComponent(jsonState));
    }

    public decode(encodedState: string): AttendanceStoreShare {
        const jsonState = decodeURIComponent(atob(encodedState));
        const parsed: any = JSON.parse(jsonState);


        return {
            attendance: Array.isArray(parsed.attendance) ? parsed.attendance : [],
            history: Array.isArray(parsed.history) ? parsed.history : []
        };
    }
}
