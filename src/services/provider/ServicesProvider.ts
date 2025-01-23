import {ServicesResolver} from './ServiceResolverClass.ts';
import {LocalStorageService} from '../LocalStorage.service.ts';
import {TimeAndDateService} from '../TimeAndDate.service.ts';

const ServicesProviderFactory = () => {
    return new ServicesResolver([LocalStorageService, TimeAndDateService]);
}
export const servicesProvider = ServicesProviderFactory();
