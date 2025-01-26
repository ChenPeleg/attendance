import {html, LitElement} from 'lit';
import {customElement } from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {Txt} from '../translations/translations.ts';

@customElement('side-menu-content')
export class SideMenuContent extends LitElement {


    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html`
            <div>
                <div class="h-14 w-full flex-row flex justify-start">
                    <span>
                    ${Txt.display}
                        
                    </span>
                    <span>
                           <theme-switch></theme-switch>
                    </span>
                </div>
              
            </div>
        `;
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'side-menu-content': SideMenuContent;
    }
}
