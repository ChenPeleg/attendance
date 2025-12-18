import {html, LitElement} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {Txt} from '../translations/translations.ts';
import {globalStore} from '../store/Store.ts';
import {ChildrenDisplayType} from '../models/AttendanceStore.ts';
import gridImage from '../assets/svg/grid.svg'
import listImage from '../assets/svg/list.svg'
import {ActionType} from '../models/AppAction.ts';


@customElement('children-display-button')
export class ChildrenDisplayButton extends LitElement {
    @state() private displayType: ChildrenDisplayType = globalStore.getState().childrenDisplayType;


    clickOption(): void {

        globalStore.dispatch({
            type: ActionType.changeListOrGrid,
            payload:  this.displayType === ChildrenDisplayType.List ? ChildrenDisplayType.Grid : ChildrenDisplayType.List
        })

    }


    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
        globalStore.subscribe((value) => {
            this.displayType = value.childrenDisplayType;
            this.requestUpdate();
        })
    }


    render() {
        return html`
            <div class="h-14 w-full flex-row flex justify-between gap-5">
                    <span>
                    ${Txt.displayLayout} 
                    </span>
                    <span>
                             <button @click=${() => this.clickOption()}
                                     class=" bg-secondary rounded-md  h-10 cursor-pointer flex flex-row px-3 justify-center items-center ">
                        <img src="${this.displayType === ChildrenDisplayType.List ? listImage : gridImage}" class="w-7 h-7 app-icon"
                             alt="menu"/>
                    </button>
                    </span>
            </div>

        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'children-display-button': ChildrenDisplayButton
    }
}

