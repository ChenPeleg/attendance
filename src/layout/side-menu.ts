import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
 
import menuButton from '../assets/svg/menu-button.svg'


@customElement('side-menu')
export class AppNavbar extends LitElement {



    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html`
            <div id="nav-bar-container h-16 flex flex-col z-10">
                <button class="h-full flex flex-col justify-center items-center bg-secondary" style="  border: none">
                    <a href="#abc">
                        <img src=${menuButton} class="app-icon " alt="menu"/>
                    </a>
                </button>
              
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'side-menu': AppNavbar
    }
}
