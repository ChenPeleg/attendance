import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {LocalStorageService} from './LocalStorage.service.ts';

export enum AppColorTheme {
    Light = 'light', Dark = 'dark', System = 'system'
}

export class ThemeService extends AbstractBaseService {
    static THEME_LS_KEY = 'attendance_theme';
    private currentTheme: AppColorTheme;

    constructor(provider: ServicesResolver) {
        super(provider);
        this.currentTheme = this.getDefaultTheme();
    }

    init() {
        this.subscribeToThemeChange();
    }

    getDefaultTheme(): AppColorTheme {
        const themFromLocalStorage = this.servicesResolver.getService(LocalStorageService).getItem(ThemeService.THEME_LS_KEY);
        if (themFromLocalStorage) {
            return themFromLocalStorage as AppColorTheme;
        }
        return this.getSystemTheme();
    }

    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? AppColorTheme.Dark : AppColorTheme.Light;
    }

    themeChangeHandler(e: MediaQueryListEvent) {
        if (this.currentTheme === AppColorTheme.System) {
            this.setTheme(e.matches ? AppColorTheme.Dark : AppColorTheme.Light);
        }
    }

    setTheme(theme: AppColorTheme) {
        this.currentTheme = theme;
        this.applyTheme();
    }

    getTheme(): AppColorTheme {
        return this.currentTheme;
    }

    private applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
    }

    private subscribeToThemeChange() {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.themeChangeHandler.bind(this));

    }
}
