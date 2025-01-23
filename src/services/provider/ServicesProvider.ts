import {ServicesResolver} from './ServiceResolverClass.ts';
import {LocalStorageService} from '../LocalStorage.service.ts';

const ServicesProviderFactory = () => {
    return new ServicesResolver([LocalStorageService]);
}
export const servicesProvider = ServicesProviderFactory();
