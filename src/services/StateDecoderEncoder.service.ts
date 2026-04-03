import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {AttendanceStoreShare} from '../models/AttendanceStore.ts';
import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {RangedId} from '../models/RangedId.ts';
import {ChildStateEncoderService} from './ChildStateEncoder.service.ts';
import {TimestampEncoderService} from './TimestampEncoder.service.ts';

/**
 * Facade service for encoding and decoding application state.
 * Delegates to specialized services for child state and timestamp encoding.
 */
export class StateDecoderEncoderService extends AbstractBaseService {
    private childStateEncoder: ChildStateEncoderService;
    private timestampEncoder: TimestampEncoderService;

    constructor(provider: ServicesResolver) {
        super(provider);
        this.childStateEncoder = provider.getService(ChildStateEncoderService);
        this.timestampEncoder = provider.getService(TimestampEncoderService);
    }

    public encode(state: AttendanceStoreShare, extraChildren: {id: RangedId, name: string, manuallyAdded: true}[] = []): string {
        return this.childStateEncoder.encode(state, extraChildren);
    }

    public decode(encodedState: string, extraChildren: {id: RangedId, name: string, manuallyAdded: true}[] = []): AttendanceStoreShare {
        return this.childStateEncoder.decode(encodedState, extraChildren);
    }

    public encodeTime(current: number, history: number[]): string {
        return this.timestampEncoder.encodeTime(current, history);
    }

    public decodeTime(encodedState: string): { current: number, history: number[] } {
        return this.timestampEncoder.decodeTime(encodedState);
    }
}
