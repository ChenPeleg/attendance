import {html, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {PWAService, PWAStatus} from '../services/PWA.service.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {Txt} from '../translations/translations.ts';
import installMobile from '../assets/svg/install-mobile.svg'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';


@customElement('install-pwa-button')
export class InstallPwaButton extends LitElement {
    static INSTALL_APP_BUTTON_ID = 'install-app-button';
    @state() canInstall = false;
    @state() preInstallEvent: Event | null = null;

    initPwa = async () => {
        const pwaService = servicesProvider.getService(PWAService);
        const canInstallPWA = await pwaService.checkIfCanInstallPWA();
        if (!canInstallPWA) {
            return;
        }
        this.preInstallEvent = canInstallPWA;
        this.canInstall = true;
        const result = await pwaService.promisifiedCheckForPWA();
        if (result === PWAStatus.NotInstalled) {
        }
    }

    firstUpdated() {

        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
        this.initPwa().then();

    }

    render() {
        return html`
            <button id="${InstallPwaButton.INSTALL_APP_BUTTON_ID}" @click="${this.installPWA}"
                    class="h-11  ${this.canInstall ? 'relative' : 'hidden'} flex flex-row justify-center w-full bg-secondary text-primary rounded-md cursor-pointer">
                 <span class="absolute right-0 px-3 w-8 h-9 flex-row flex justify-center items-center ">
                    <img class="app-icon w-7 h-7   " src="${installMobile}" alt="checked sort">
                 </span>
                <span>
                        ${Txt.installApp}
                  </span>
            </button>
        `;
    }

    private installPWA = async () => {
        //@ts-ignore
        const result = await this.preInstallEvent.prompt();
        console.log('result', result);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'install-pwa-button': InstallPwaButton;
    }
}
