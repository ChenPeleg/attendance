import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {ChildStatus} from '../models/ChildStatus.ts';

@customElement('app-child')
export class AppChild extends LitElement {
    @property({type: Object}) child: ChildStatus | null = null;

    @property({type: Function}) onClick: () => void = () => {
    };

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html`
            <button @click="${this.onClick}"
                    class=" flex flex-row justify-start items-center h-12 w-full shadow  relative  gap-3 rounded-md   "
                    style="  border: none">
                    <span id="check-mark-container" class="absolute w-5 h-5 relative bg-green-200">
                        <span id="check-mark-container-box" class="absolute top-0 rounded w-4 h-4  right-0" 
                              style="border: 1px solid ${this.child?.checkedIn ? 'grey' : 'black'}">
                            
                        </span>
                    <span id="check-mark-container" class="absolute top-0">
                        ${this.getCheckMark()} 
                    </span>
                </span>
                <span class="flex flex-row justify-center items-center">
                    ${this.child?.name}  
                   </span>
            </button>
        `
    }

    private getCheckMark() {

        return this.child?.checkedIn ? html`
            <check-mark </check-mark>` : html``
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-child': AppChild
    }
}
