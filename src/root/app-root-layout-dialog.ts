import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import '../main/app-main.ts'
import '../layout/app-navbar.ts'
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {ConfigurationService} from '../services/Configuration.service.ts';


@customElement('app-root-layout-dialog')
export class AppRootLayoutDialog extends LitElement {

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }


    render() {
        const env = servicesProvider.getService(ConfigurationService).environment
        if (env !== 'development') {
            return html``
        }
        return html`
            <div class="h-screen w-screen flex-col items-center justify-center  overflow-x-hidden"
                 style="direction: rtl; max-width: 100svw; max-height: 100svh;">
                <app-dialog></app-dialog>
            </div>

        `
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'app-root-layout-dialog': AppRootLayoutDialog
    }
}
