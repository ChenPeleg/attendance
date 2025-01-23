import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {AbstractBaseService} from './provider/AbstractBaseService.ts';

export class TimeAndDateService extends AbstractBaseService {

    constructor(provider: ServicesResolver) {
        super(provider);

    }
    createTimestamp() {
        return Date.now();
    }
    hoursAndMinutes(timestamp: number) {
        const date = new Date(timestamp);
        return `${date.getHours()}:${this.padZero(date.getMinutes())}`;
    }
    padZero(num: number) {
        return num < 10 ? `0${num}` : num;
    }


}
