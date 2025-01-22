import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'

import {globalStyleSheet} from '../styles/global-style-sheet.ts';

import '../layout/app-cockpit.ts'
@customElement('app-main')
export class AppMain extends LitElement {

    @property({type: Number})
    count = 0;

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }


    render() {
        return html`
            <div class="flex flex-col items-center justify-center bg-amber-100">
                <app-cockpit></app-cockpit>
            </div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'app-main': AppMain
    }
}
