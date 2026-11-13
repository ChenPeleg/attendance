import {html, LitElement} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {Txt} from '../translations/translations.ts';
import {globalStore} from '../store/Store.ts';
import {ChildrenDisplayType} from '../models/AttendanceStore.ts';
import gridImage from '../assets/svg/grid.svg'
import listImage from '../assets/svg/list.svg'
import {ActionType} from '../models/AppAction.ts';
import {AppBaseComponent} from '../mixins/GlobalStylesheetMixin.ts';


@customElement('children-display-button')
export class ChildrenDisplayButton extends AppBaseComponent(LitElement) {
    @state() private displayType: ChildrenDisplayType = globalStore.getState().childrenDisplayType;


    clickOption(): void {

        globalStore.dispatch({
            type: ActionType.changeListOrGrid,
            payload: this.displayType === ChildrenDisplayType.List ? ChildrenDisplayType.Grid : ChildrenDisplayType.List
        })

    }


    firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
        super.firstUpdated(changedProperties);
        globalStore.subscribe((value) => {
            this.displayType = value.childrenDisplayType;
            this.requestUpdate();
        })
    }


    render() {
        return html`
            <div class="menu-item w-full">
                    <span>
                    ${Txt.displayLayout}
                    </span>
                <span>
                    <button @click=${() => this.clickOption()}
                            data-testid="display-toggle"
                            class="menu-segment">
                        <span class="${this.displayType === ChildrenDisplayType.List ? 'on' : ''}">
                            <img src="${listImage}" class="w-6 h-6 app-icon" alt="list"/>
                        </span>
                        <span class="${this.displayType === ChildrenDisplayType.Grid ? 'on' : ''}">
                            <img src="${gridImage}" class="w-6 h-6 app-icon" alt="grid"/>
                        </span>
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

