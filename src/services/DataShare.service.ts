import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {AttendanceStore} from '../models/AttendanceStore.ts';
import {ServicesResolver} from './provider/ServiceResolverClass.ts';

export class DataShareService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }

    public encode(state: AttendanceStore): string {
        const jsonState = JSON.stringify(state);
        // encodeURIComponent to handle unicode characters, then btoa to base64
        return btoa(encodeURIComponent(jsonState));
    }

    public decode(encodedState: string): AttendanceStore {
        const jsonState = decodeURIComponent(atob(encodedState));
        return JSON.parse(jsonState);
    }

    public getShareUrl(state: AttendanceStore): string {
        try {
            const encodedState = this.encode(state);
            const url = new URL(window.location.href);
            url.searchParams.set('data', encodedState);
            return url.toString();
        } catch (e) {
            console.error('Failed to encode state', e);
            return window.location.href;
        }
    }

    public getStoreFromUrl(): AttendanceStore | null {
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
