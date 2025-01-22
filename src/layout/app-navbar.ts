import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {Txt} from '../translations/translations.ts';
import menuButton from '../assets/svg/menu-button.svg'

@customElement('app-navbar')
export class AppNavbar extends LitElement {
    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html`
            <nav class="w-full h-12 bg-gray-100 shadow  relative">
                <div class="h-full flex flex-row shadow  gap-3">
                    <button class="h-full flex flex-col justify-center items-center" style="  border: none">
                        <a href="#abc">
                            <img src=${menuButton} class=" " alt="menu"/>
                        </a>
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
