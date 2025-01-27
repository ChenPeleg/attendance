import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';


@customElement('bg-image')
export class BgImage extends LitElement {

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html`
            <div class="fixed" style="z-index: -1">
                <div id="bg-image" class=" w-full h-full fixed flex flex-col z-10 bg-red-100   z-0">

                </div>
            </div>
          
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'bg-image': BgImage
    }
}
