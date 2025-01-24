import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';

@customElement('theme-switch')
export class ThemeSwitch extends LitElement {

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }


    render() {
        return html`
            <button class="w-full  flex-row flex gap-3">
                Dark Mode
            </button>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'theme-switch': ThemeSwitch
    }
}
