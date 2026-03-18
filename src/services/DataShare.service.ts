import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {AttendanceStore, AttendanceStoreShare} from '../models/AttendanceStore.ts';
import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {StateDecoderEncoderService} from './StateDecoderEncoder.service.ts';
import {SearchParamsService} from './SearchParams.service.ts';

export class DataShareService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }

    public encodeChildrenData(state: AttendanceStoreShare): string {
        return this.servicesResolver.getService(StateDecoderEncoderService).encode(state);
    }

    public decodeChildrenData(encodedState: string): AttendanceStoreShare {
        return this.servicesResolver.getService(StateDecoderEncoderService).decode(encodedState);
    }

    public getShareUrl(state: AttendanceStore): string {
        try {
            const shareableState: AttendanceStoreShare = {
                attendance: state.attendance,
                history: state.history,
                lastUpdated: state.lastUpdated
            };
            const encodedState = this.encodeChildrenData(shareableState);
            const encodedTime = this.servicesResolver.getService(StateDecoderEncoderService).encodeTime(
                state.lastUpdated,
                state.history.map(h => h.timestamp)
            );

            const searchParamsService = this.servicesResolver.getService(SearchParamsService);
            const params = searchParamsService.getParams();
            params.set(SearchParamsService.DATA_QUERY_PARAM, encodedState);
            params.set(SearchParamsService.TIME_QUERY_PARAM, encodedTime);

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

            let store: AttendanceStoreShare | null = null;
            if (encodedState) {
                store = this.decodeChildrenData(encodedState);
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
