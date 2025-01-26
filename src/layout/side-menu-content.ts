import {html, LitElement} from 'lit';
import {customElement } from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';


@customElement('side-menu-content')
export class SideMenuContent extends LitElement {


    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html`
            <div>
                content
            </div>
        `;
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'side-menu-content': SideMenuContent;
    }
}
