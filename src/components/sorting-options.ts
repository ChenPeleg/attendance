import {html, LitElement} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {Txt} from '../translations/translations.ts';
import {SortOrder, SortType} from '../models/SortType.ts';
import {globalStore} from '../store/Store.ts';
import {ActionType} from '../models/AppAction.ts';
import checkMark from '../assets/svg/check.svg'

const sortOptions = {
    [SortType.Class]: {
        [SortOrder.Ascending]: {
            label: Txt.classAscending
        },
        [SortOrder.Descending]: {
            label: Txt.classDescending
        }
    },
    [SortType.Name]: {
        [SortOrder.Ascending]: {
            label: Txt.nameAscending
        },
        [SortOrder.Descending]: {
            label: Txt.nameDescending
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
    clickOption(sortType: SortType ): void {

        globalStore.dispatch({
            type: ActionType.changeSort,
            payload: {
                sortType: sortType,
            }
        })

    }
    buildSortOptionsButton() {
        return Object.keys(sortOptions ).map((option:   any  ) => {
            //@ts-ignore
            const isChosen = this.sortType === option;

            //@ts-ignore
            const shownOption = sortOptions[option];

            const order  = isChosen ? this.sortOrder : SortOrder.Ascending;
            console.log( this.sortOrder)
            //@ts-ignore
            return html`
                <button @click="${()=>this.clickOption(option )}" class="h-10 relative flex flex-row justify-center w-full bg-secondary text-primary rounded-md cursor-pointer">
                 <span class="absolute right-0 px-3 w-8 h-9 flex-row flex justify-center items-center ">
                    <img class="app-icon w-8 h-8  ${isChosen    ? ' ' : ' hidden '}" src="${checkMark}" alt="checked sort">
                 </span>
                  <span>
                    ${shownOption[order].label}
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

