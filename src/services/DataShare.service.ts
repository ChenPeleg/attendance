import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {AttendanceStore, AttendanceStoreShare} from '../models/AttendanceStore.ts';
import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {StateDecoderEncoderService} from './StateDecoderEncoder.service.ts';
import {SearchParamsService} from './SearchParams.service.ts';

export class DataShareService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }

    public encodeChildrenData(state: AttendanceStoreShare, manualChildren: any[] = []): string {
        return this.servicesResolver.getService(StateDecoderEncoderService).encode(state, manualChildren);
    }

    public decodeChildrenData(encodedState: string, manualChildren: any[] = []): AttendanceStoreShare {
        return this.servicesResolver.getService(StateDecoderEncoderService).decode(encodedState, manualChildren);
    }

    public getShareUrl(state: AttendanceStore): string {
        try {
            const shareableState: AttendanceStoreShare = {
                attendance: state.attendance,
                history: state.history,
                lastUpdated: state.lastUpdated
            };

            const manualChildren = state.attendance.filter(c => c.manuallyAdded).map(c => ({
                id: c.id,
                name: c.name,
                manuallyAdded: true
            }));

            const encodedState = this.encodeChildrenData(shareableState, manualChildren);
            const encodedTime = this.servicesResolver.getService(StateDecoderEncoderService).encodeTime(
                state.lastUpdated,
                state.history.map(h => h.timestamp)
            );

            const searchParamsService = this.servicesResolver.getService(SearchParamsService);
            const params = searchParamsService.getParams();
            params.set(SearchParamsService.DATA_QUERY_PARAM, encodedState);
            params.set(SearchParamsService.TIME_QUERY_PARAM, encodedTime);

            if (manualChildren.length > 0) {
                // b2a with simple unicode handler
                const encodedManual = btoa(unescape(encodeURIComponent(JSON.stringify(manualChildren))));
                params.set(SearchParamsService.MANUAL_CHILDREN_QUERY_PARAM, encodedManual);
            }

            return searchParamsService.constructUrl(params);
        } catch (e) {
            console.error('Failed to encode state', e);
            const searchParamsService = this.servicesResolver.getService(SearchParamsService);
            return searchParamsService.constructUrl(searchParamsService.getParams());
        }
    }

    public getStoreFromUrl(): AttendanceStoreShare | null {
        try {
            const searchParamsService = this.servicesResolver.getService(SearchParamsService);
            const encodedState = searchParamsService.getParams().get(SearchParamsService.DATA_QUERY_PARAM);
            const encodedTime = searchParamsService.getParams().get(SearchParamsService.TIME_QUERY_PARAM);
            const encodedManual = searchParamsService.getParams().get(SearchParamsService.MANUAL_CHILDREN_QUERY_PARAM);

            let manualChildren: any[] = [];
            if (encodedManual) {
                try {
                    manualChildren = JSON.parse(decodeURIComponent(escape(atob(encodedManual))));
                } catch (e) {
                    console.error('Failed to parse manual children', e);
                }
            }

            let store: AttendanceStoreShare | null = null;
            if (encodedState) {
                store = this.decodeChildrenData(encodedState, manualChildren);
            }

            if (store && encodedTime) {
                 const timeData = this.servicesResolver.getService(StateDecoderEncoderService).decodeTime(encodedTime);
                 store.lastUpdated = timeData.current;
                 store.history = timeData.history.map(timestamp => ({
                     timestamp: timestamp,
                     attendance: []
                 }));
            }
            return store;
        } catch (e) {
            console.error('Failed to decode state', e);
            return null;
        }
    }
}
