import {html, LitElement} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {Txt} from '../translations/translations.ts';
import {SortOrder, SortType} from '../models/SortType.ts';
import {globalStore} from '../store/Store.ts';
import {ActionType} from '../models/AppAction.ts';
import checkMark from '../assets/svg/check.svg'

const sortOptions = {
    [SortType.Name]: {
        [SortOrder.Ascending]: {
            label: Txt.nameAscending
        },
        [SortOrder.Descending]: {
            label: Txt.nameDescending
        }
    },
    [SortType.Class]: {
        [SortOrder.Ascending]: {
            label: Txt.classAscending
        },
        [SortOrder.Descending]: {
            label: Txt.classDescending
        }
    },

    [SortType.Gender]: {
        [SortOrder.Ascending]: {
            label: Txt.genderGirlBoys
        },
        [SortOrder.Descending]: {
            label: Txt.genderBoysGirls
        }

    }
}


@customElement('sorting-options')
export class SortingOptions extends LitElement {
    @state() private sortType: SortType = globalStore.getState().sortType;
    @state() private sortOrder: SortOrder = globalStore.getState().sortOrder;
    clickOption(oneOption: SortType, order: SortOrder): void {
        globalStore.dispatch({
            type: ActionType.changeSort,
            payload: {
                sortType: oneOption,
                sortOrder: order
            }
        })

    }
    buildSortOptionsButton() {
        return Object.keys(sortOptions ).map((option:   any  ) => {
            //@ts-ignore
            const isChosen = this.sortType === option;
            console.log(option,this.sortType)
            //@ts-ignore
            const oneOption = sortOptions[option];
            const order  =isChosen ? this.sortOrder : SortOrder.Ascending;
            //@ts-ignore
            return html`
                <button @click="${()=>this.clickOption(oneOption, order)}" class="h-10 relative flex flex-row justify-center w-full bg-secondary text-primary rounded-md cursor-pointer">
                 <span class="absolute right-0 px-4 w-6 h-7 ">
                    <img class="app-icon w-6 h-7  ${isChosen    ? ' ' : ' hidden '}" src="${checkMark}" alt="checked sort">
                 </span>
                  <span>
                    ${oneOption[order].label}
                  </span>  
                </button>
            `
        })
    }

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
        globalStore.subscribe((value) => {
            this.sortType = value.sortType;
            this.sortOrder = value.sortOrder;
            this.requestUpdate();
        })
    }


    render() {
        return html`
            <div class="w-full  flex-col flex gap-3 pt-2">
                ${Txt.sortBy}
                <div class="flex-col flex gap-1">
                    ${this.buildSortOptionsButton()}
                </div>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sorting-options': SortingOptions
    }
}

