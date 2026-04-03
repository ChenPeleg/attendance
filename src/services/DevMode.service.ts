import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {LocalStorageService} from './LocalStorage.service.ts';

/**
 * Service responsible for managing developer mode functionality.
 * Dev mode is activated by triple-clicking the app info button within 1 second.
 */
export class DevModeService extends AbstractBaseService {
    private static readonly DEV_MODE_KEY = 'devMode';
    private static readonly CLICK_WINDOW_MS = 1000;
    private static readonly REQUIRED_CLICKS = 3;

    private clickTimes: number[] = [];

    constructor(provider: ServicesResolver) {
        super(provider);
    }

    /**
     * Enables developer mode and persists the setting.
     */
    public enableDevMode(): void {
        this.servicesResolver
            .getService(LocalStorageService)
            .setItem(DevModeService.DEV_MODE_KEY, 'true');
    }

    /**
     * Disables developer mode and removes the setting.
     */
    public disableDevMode(): void {
        this.servicesResolver
            .getService(LocalStorageService)
            .removeItem(DevModeService.DEV_MODE_KEY);
    }

    /**
     * Checks if developer mode is currently enabled.
     * @returns True if dev mode is enabled
     */
    public isDevModeEnabled(): boolean {
        const devMode = this.servicesResolver
            .getService(LocalStorageService)
            .getItem(DevModeService.DEV_MODE_KEY);
        return devMode === 'true';
    }

    /**
     * Registers a click for dev mode activation.
     * If 3 clicks occur within 1 second, dev mode is activated.
     * @returns True if dev mode was activated by this click
     */
    public registerClick(): boolean {
        const now = Date.now();

        // Remove clicks older than the time window
        this.clickTimes = this.clickTimes.filter(
            t => now - t < DevModeService.CLICK_WINDOW_MS
        );

        // Add current click
        this.clickTimes.push(now);

        // Check if we have enough clicks to activate dev mode
        if (this.clickTimes.length >= DevModeService.REQUIRED_CLICKS) {
            this.clickTimes = [];
            this.enableDevMode();
            return true;
        }

        return false;
    }

    /**
     * Resets the click counter.
     */
    public resetClicks(): void {
        this.clickTimes = [];
    }
}
