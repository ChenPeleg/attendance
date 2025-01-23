import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {AbstractBaseService} from './provider/AbstractBaseService.ts';

export class TimeAndDateService extends AbstractBaseService {

    constructor(provider: ServicesResolver) {
        super(provider);

    }
    createTimestamp() {
        return Date.now();
    }


}
