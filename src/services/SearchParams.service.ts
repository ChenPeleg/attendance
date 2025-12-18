import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {AbstractBaseService} from './provider/AbstractBaseService.ts';

export class SearchParamsService extends AbstractBaseService {
    private subscriptions: Array<(params: URLSearchParams) => void> = [];

    constructor(provider: ServicesResolver) {
        super(provider);
    }

    protected init() {
        window.addEventListener('popstate', () => this.notifySubscribers());
        this.patchHistory();
    }

    private patchHistory() {
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;

        history.pushState = (...args) => {
            originalPushState.apply(history, args);
            this.notifySubscribers();
        };

        history.replaceState = (...args) => {
            originalReplaceState.apply(history, args);
            this.notifySubscribers();
        };
    }

    public subscribeToSearchParamsChange(callback: (params: URLSearchParams) => void) {
        this.subscriptions.push(callback);
    }

    public patchParams(updates: Record<string, string | null>) {
        const params = this.getParams();
        Object.entries(updates).forEach(([key, value]) => {
            if (value === null) {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        history.pushState({}, '', newUrl);
    }

    public getParams(): URLSearchParams {
        return new URLSearchParams(window.location.search);
    }

    private notifySubscribers() {
        const params = this.getParams();
        this.subscriptions.forEach(callback => callback(params));
    }
}
