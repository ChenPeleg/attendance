import {html, LitElement} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import lightMode from '../assets/svg/light-mode.svg'
import darkMode from '../assets/svg/dark-mode.svg'
import {AppColorTheme, ThemeService} from '../services/Theme.service.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';


@customElement('theme-switch')
export class ThemeSwitch extends LitElement {

    @state() private theme: AppColorTheme = AppColorTheme.Light

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
        const themService = servicesProvider.getService(ThemeService);
        this.theme = themService.getTheme();
    }

    render() {
        return html`
            <button @click="${this.clickHandler}" class="w-full  flex-row flex gap-3 bg-secondary p-2 rounded-md">
                <img class="${this.theme === AppColorTheme.Light ? 'app-icon' : 'hidden'}" src="${darkMode}"
                 alt="light theme">
                <img class="${this.theme === AppColorTheme.Light ? 'hidden' : 'app-icon'}" src="${lightMode}" alt="light-mode">
            </button>
        `
    }

    private clickHandler = () => {
        this.theme = this.theme === AppColorTheme.Light ? AppColorTheme.Dark : AppColorTheme.Light
        const themService = servicesProvider.getService(ThemeService);
        themService.setTheme(this.theme)
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'theme-switch': ThemeSwitch
    }
}
