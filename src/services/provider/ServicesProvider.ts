import {ServicesResolver} from './ServiceResolverClass.ts';
import {LocalStorageService} from '../LocalStorage.service.ts';
import {TimeAndDateService} from '../TimeAndDate.service.ts';
import {ThemeService} from '../Theme.service.ts';
import {StoreService} from '../Store.service.ts';
import {HistoryService} from '../History.service.ts';
import {SortService} from '../SortService.service.ts';
import {BackgroundImageService} from '../BackgroundImage.service.ts';
import {ConfigurationService} from '../Configuration.service.ts';
import {PWAService} from '../PWA.service.ts';
import {SupersizeAnimationService} from '../SupersizeAnimation.service.ts';
import {SearchParamsService} from '../SearchParams.service.ts';
import {DataShareService} from '../DataShare.service.ts';
import {ShareUrlService} from '../ShareUrl.service.ts';
import {StateDecoderEncoderService} from '../StateDecoderEncoder.service.ts';

const ServicesProviderFactory = () => {
    const provider = new ServicesResolver([PWAService, ConfigurationService,StateDecoderEncoderService, BackgroundImageService, SortService, LocalStorageService, TimeAndDateService, ThemeService, StoreService, HistoryService,SupersizeAnimationService, SearchParamsService, DataShareService, ShareUrlService]);
    provider.initServices();
    return provider;
}
export const servicesProvider = ServicesProviderFactory();
