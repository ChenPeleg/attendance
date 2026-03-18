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
                history: state.history
            };
            const encodedState = this.encodeChildrenData(shareableState);
            
            const searchParamsService = this.servicesResolver.getService(SearchParamsService);
            const params = searchParamsService.getParams();
            params.set(SearchParamsService.DATA_QUERY_PARAM, encodedState);
            
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
            if (encodedState) {
                return this.decodeChildrenData(encodedState);
            }
            return null;
        } catch (e) {
            console.error('Failed to decode state', e);
            return null;
        }
    }
}
