import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'

import '../ui/check-mark/check-mark.ts'
import {Txt} from '../translations/translations.ts';
import '../ui/check-mark-with-animation/check-mark-with-animation.ts';
import {AppBaseComponent} from '../mixins/GlobalStylesheetMixin.ts';

@customElement('children-count')
export class ChildrenCount extends AppBaseComponent(LitElement) {
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

    render() {
        const progress = this.totalChildren ? Math.round(this.checkedInChildren / this.totalChildren * 100) : 0;
        return html`
            <style>
                .count-card {
                    border-radius: 22px;
                    background-color: var(--secondary-background-color);
                    box-shadow: 0 4px 0 var(--card-shadow-color);
                }
                .count-card.all-checked {
                    background-color: var(--bg-success-color);
                    box-shadow: 0 4px 0 var(--success-shadow-color);
                }
                .progress-track {
                    height: 10px;
                    border-radius: 10px;
                    overflow: hidden;
                    background-color: var(--accent-background-color);
                }
                .progress-fill {
                    height: 100%;
                    border-radius: 10px;
                    background: linear-gradient(270deg, #4ECDC4, #6BCB77);
                    transition: width 0.3s ease-in-out;
                }
            </style>
            <div @click="${this.onClick}"
                 data-testid="children-count"
                 class="count-card transition-colors ease-in-out duration-300 flex flex-col justify-center
                  ${this.areAllChecked ? ' all-checked min-w-44 cursor-pointer ' : ' min-w-32 '} gap-1 h-16 px-6">
                <div class="flex flex-row justify-center items-center">
                    <span> ${this.totalChildren} / ${this.checkedInChildren} </span>
                    <div class="transition-all ease-in-out duration-300 flex flex-row justify-center items-center w-0 overflow-hidden
                     ${this.areAllChecked ? ' w-44 gap-5 ' : ' gap-0 '}"> ${this.areAllChecked ? this.renderAllChecked() : ''}</div>
                </div>
                <div class="progress-track ${this.areAllChecked ? 'hidden' : ''}">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
            </div>
        `
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'children-count': ChildrenCount
    }
}
