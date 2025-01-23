import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';

import '../ui/check-mark.ts'


@customElement('children-count')
export class ChildrenCount extends LitElement {
    @property({type: Number}) totalChildren: number = 0;
    @property({type: Number}) checkedInChildren: number = 0;
    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html`
            <div class="flex flex-row justify-center items-center w-32 gap-2 rounded-full h-12 bg-amber-200">
                <span>   ${this.totalChildren} / ${this.checkedInChildren} </span>
            </div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'children-count': ChildrenCount
    }
}
