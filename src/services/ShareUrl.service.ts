import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {DataShareService} from './DataShare.service.ts';
import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {globalStore} from '../store/Store.ts';
import {Txt} from '../translations/translations.ts';
import {StoreService} from './Store.service.ts';
import {ActionType} from '../models/AppAction.ts';

export class ShareUrlService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }

    async shareStateUrl(): Promise<void> {
        const state = globalStore.getState();
        const dataShareService = this.servicesResolver.getService(DataShareService);
        const url = dataShareService.getShareUrl(state);

        if (navigator.share) {
            try {
                await navigator.share({
                    title: Txt.shareList,
                    text: 'Attendance Data',
                    url: url
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            console.log('Web Share API not supported', url);
            try {
                await navigator.clipboard.writeText(url);
                alert(Txt.copyContent);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        }
    }

    public checkForSharedData(): void {
        const dataShareService = this.servicesResolver.getService(DataShareService);
        const sharedState = dataShareService.getStoreFromUrl();

        if (sharedState) {
            setTimeout(() => {
                if (confirm(Txt.loadDataFromUrl)) {
                    const storeService = this.servicesResolver.getService(StoreService);
                    storeService.store.dispatch({
                        type: ActionType.loadStateFromUrl,
                        payload: sharedState
                    });

                    // Remove data param from URL
                    const url = new URL(window.location.href);
                    url.searchParams.delete('data');
                    window.history.replaceState({}, '', url.toString());
                }
            }, 500);
        }
    }
}
