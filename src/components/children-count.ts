import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';

import '../ui/check-mark/check-mark.ts'
import {Txt} from '../translations/translations.ts';
import '../ui/check-mark-with-animation/check-mark-with-animation.ts';

@customElement('children-count')
export class ChildrenCount extends LitElement {
    @property({type: Number}) totalChildren: number = 0;
    @property({type: Number}) checkedInChildren: number = 0;
    @property({type: Function}) onClick: () => void = () => {
    };
    private get areAllChecked() {
        return this.totalChildren === this.checkedInChildren;
    }

    renderAllChecked() {
        return html`   
            <div id="all-checked" data-testid="all-children-checked" class="contents overflow-hidden "> 
                <span id="check-mark-aligner" class="flex flex-col justify-center h-full pt-2">
                   <check-mark-with-animation> </check-mark-with-animation> 
                 </span>
                <span class="mr-3"> ${Txt.finishList} </span>
           </div>`
    }

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {

        return html`
            <div @click="${this.onClick}"  
                 data-testid="children-count"
                 class="transition-colors ease-in-out duration-300 flex flex-row justify-center items-center  
                  ${this.areAllChecked ? ' min-w-44 bg-success  app-shadow cursor-pointer ' : ' min-w-32 app-shadow bg-secondary'}  gap-4 rounded-full h-16  px-10">
                <span> ${this.totalChildren} / ${this.checkedInChildren} </span>
               <div class="transition-all ease-in-out duration-300 flex flex-row justify-center items-center w-0   overflow-hidden  
                 ${this.areAllChecked ? ' w-44   gap-5 ' : ' gap-0   '}"> ${this.areAllChecked ? this.renderAllChecked() : ''}</div>
            </div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'children-count': ChildrenCount
    }
}
