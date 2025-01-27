import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {PWAService} from '../services/PWA.service.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {Txt} from '../translations/translations.ts';
import installMobile from '../assets/svg/install-mobile.svg'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';


@customElement('install-pwa-button')
export class InstallPwaButton extends LitElement {
    static INSTALL_APP_BUTTON_ID = 'install-app-button';
    initPwa = async () => {
        const pwaService = servicesProvider.getService(PWAService);
        const result = await pwaService.promisifiedCheckForPWA();
        console.log(result);
    }

    firstUpdated() {

        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
        this.initPwa().then();

        // const pwaService = servicesProvider.getService(PWAService);
        // const button = this.shadowRoot?.getElementById(InstallPwaButton.INSTALL_APP_BUTTON_ID) as HTMLElement;
        // pwaService.initPwaButton(button);
    }

    render() {
        return html`
            <button id="${InstallPwaButton.INSTALL_APP_BUTTON_ID}"
                    class="h-11 relative flex flex-row justify-center w-full bg-secondary text-primary rounded-md cursor-pointer">
                 <span class="absolute right-0 px-3 w-8 h-9 flex-row flex justify-center items-center ">
                    <img class="app-icon w-7 h-7   " src="${installMobile}" alt="checked sort">
                 </span>
                <span>
                        ${Txt.installApp}
                  </span>
            </button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'install-pwa-button': InstallPwaButton;
    }
}
