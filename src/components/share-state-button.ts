import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {Txt} from '../translations/translations.ts';
import {globalStore} from '../store/Store.ts';
import copyImage from '../assets/svg/copy-content.svg'


@customElement('share-state-button')
export class ShareStateButton extends LitElement {


    clickOption(): void {
        const state = globalStore.getState()
        console.log('state', state)

    }


    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];

    }


    render() {
        return html`
            <div class="h-14 w-full flex-row flex justify-between gap-5">
                    <span>
                    ${Txt.shareList} 
                    </span>
                <span>
                             <button @click=${() => this.clickOption()}
                                     class=" bg-secondary rounded-md  h-10 cursor-pointer flex flex-row px-3 justify-center items-center ">
                        <img src="${copyImage}" class="w-7 h-7 app-icon"
                             alt="menu"/>
                    </button>
                    </span>
            </div>

        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'share-state-button': ShareStateButton
    }
}

