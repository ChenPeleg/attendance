import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import { Txt} from '../translations/translations.ts';


@customElement('app-navbar')
export class AppNavbar extends LitElement {
    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html`
            <nav class="w-full h-12 bg-gray-100 shadow  relative"> 
                <div class="h-full flex flex-row shadow-md">
                    <button>
                        
                    </button>
                    <div class="flex flex-row justify-center items-center">
                        ${Txt.attendance} ${Txt.pistachio}
                    </div>
                </div>
            </nav>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-navbar': AppNavbar
    }
}
