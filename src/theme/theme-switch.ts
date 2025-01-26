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
    }

    render() {
        return html`
            <button @click="${this.clickHandler}" class="w-full  flex-row flex gap-3">
                <img class="${this.theme === AppColorTheme.Light ? '' : 'hidden'}" src="${darkMode}">
                <img class="${this.theme === AppColorTheme.Light ? 'hidden' : ''}" src="${lightMode}">

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
