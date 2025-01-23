import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {ChildStatus} from '../models/ChildStatus.ts';

@customElement('app-child')
export class AppChild extends LitElement {
    @property({type: Object})
    child: ChildStatus | null = null;

    @property({type: Function})
    onClick: () => void = () => {};

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }


    render() {
        return html`
            <div id="child-root" class="w-full h-12 w-full shadow  relative bg-red-100 gap-3"> 
                    <button @click="${this.onClick}" class="h-full w-full flex flex-row justify-start items-center" style="  border: none">
                        ${this.child?.name} ${this.child?.checkedIn ? '1' : '0'}
                    </button>  
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-child': AppChild
    }
}
