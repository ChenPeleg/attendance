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
        return html` 
                <app-dialog></app-dialog> 

        `
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'app-root-layout-dialog': AppRootLayoutDialog
    }
}
