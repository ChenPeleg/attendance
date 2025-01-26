import {ServicesResolver} from './ServiceResolverClass.ts';
import {LocalStorageService} from '../LocalStorage.service.ts';
import {TimeAndDateService} from '../TimeAndDate.service.ts';
import {ThemeService} from '../Theme.service.ts';
import {StoreService} from '../Store.service.ts';
import {HistoryService} from '../History.service.ts';

const ServicesProviderFactory = () => {
    return new ServicesResolver([LocalStorageService, TimeAndDateService,ThemeService,StoreService,HistoryService]);
}
export const servicesProvider = ServicesProviderFactory();
