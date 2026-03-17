import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {AttendanceStore, AttendanceStoreShare} from '../models/AttendanceStore.ts';
import {ServicesResolver} from './provider/ServiceResolverClass.ts';

export class DataShareService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }

    public encode(state: AttendanceStoreShare): string {
        const jsonState = JSON.stringify(state);
        // encodeURIComponent to handle unicode characters, then btoa to base64
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
            throw e; // Rethrow to be caught by getStoreFromUrl
        }
    }

    public getShareUrl(state: AttendanceStore): string {
        try {
            const shareableState: AttendanceStoreShare = {
                attendance: state.attendance,
                history: state.history
            };
            const encodedState = this.encode(shareableState);
            const url = new URL(window.location.href);
            url.searchParams.set('data', encodedState);
            return url.toString();
        } catch (e) {
            console.error('Failed to encode state', e);
            return window.location.href;
        }
    }

    public getStoreFromUrl(): AttendanceStoreShare | null {
        try {
            const url = new URL(window.location.href);
            const encodedState = url.searchParams.get('data');
            if (encodedState) {
                return this.decode(encodedState);
            }
            return null;
        } catch (e) {
            console.error('Failed to decode state', e);
            return null;
        }
    }
}
