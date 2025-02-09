import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import deleteImage from '../assets/svg/delete.svg'
import busIcon from '../assets/svg/bus.svg'
import {ChildrenDisplayType, DisplayType} from '../models/AttendanceStore.ts';
import {Txt} from '../translations/translations.ts';
import {PresentToday} from '../models/presentToday.ts';
import {globalStore} from '../store/Store.ts';
import {ActionType} from '../models/AppAction.ts';


@customElement('app-child')
export class AppChild extends LitElement {
    @property({type: DisplayType}) displayType = DisplayType.Attendance;
    @property({type: Object}) child: ChildStatus | null = null;
    @property({type: Object}) childrenGridOrList: ChildrenDisplayType = ChildrenDisplayType.List;
    @property({type: Function}) onClick: () => void = () => {
    };

    deleteChild() {
        globalStore.dispatch({
            type: ActionType.removerAddedChild,
            payload: this.child?.id
        })
    }

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];

    }

    render() {
        return html`
            <div class="flex flex-row items-center justify-center  ">
                <button @click="${this.onClick}"
                        data-testid="${this.getTestId()}"
                        class=" ${this.getButtonStyle()} "
                        style="  border: none;  ">
                    <span id="check-mark-container"
                          class=" w-8 h-8 relative  mt-1 mr-1 ${this.displayType === DisplayType.DaySettings ? 'hidden' : 'absolute'}">
                          <span id="check-mark-container-box"
                                class="absolute top-0 rounded-full  transition-all ease-in-out duration-200 h-7 w-7 right-0
                               ${this.child?.checkedIn ? ' shadow-md ' : ' '}
                               "
                                style="border: 2px solid ${this.child?.checkedIn ? 'white' : 'black'}">
                         </span>
                      <span id="check-mark-container" class="absolute -top-4 -right-0.5   "
                      >
                        ${this.getCheckMark()} 
                      </span>
                  </span>
                    <span class="flex flex-row justify-center items-center   ">
                    ${this.child?.name} ${this.getChildBusIcon()} 
                 </span>
                    <span id="is-here-today"
                          class="   ${this.displayType !== DisplayType.DaySettings ? 'hidden' : 'justify-self-end  '}">
                      <span id="check-mark-container"
                      >
                        ${this.child?.presentToday === PresentToday.Yes ? Txt.present : Txt.absent} 
                      </span>
                 </span>
                </button>
                ${this.getDeleteButton()}
            </div>
        `
    }

    private getChildBusIcon() {
        if (this.displayType !== DisplayType.DaySettings) {
            return ''
        }
        if (!this.child?.manuallyAdded && this.child?.onlySchoolBus) {
            const presentToday = this.child?.presentToday === PresentToday.Yes
            return html`
                <div class="${presentToday ? '' : 'opacity-20'} h-full flex flex-col justify-center items-center px-2 pt-1">
                    <img src="${busIcon}" alt="bus" class="app-icon w-6 h-6"/></div>`
        }
        return ''
    }

    private getDeleteButton() {
        if (!this.child?.manuallyAdded || this.displayType !== DisplayType.DaySettings) {
            return ''
        }
        return html`
            <div class="relative ">
                <button @click="${this.deleteChild}"
                        class="bg-primary absolute -left-12 -top-5 mt-0.5 text-secondary rounded-full h-10 w-10 flex flex-row justify-center items-center">
                    <img src="${deleteImage}" alt="delete" class="app-icon w-6 h-6"> </img>
                </button>
            </div>
        `
    }

    private getTestId() {
        const displayType = this.displayType === DisplayType.Attendance ? 'attend' : 'day-set';
        return `child_${this.child?.id}_${displayType}`
    }

    private getButtonStyle() {
        return `bg-secondary text-primary flex flex-row  
        ${this.childrenGridOrList === ChildrenDisplayType.Grid ? ' px-4 gap-5' : '  px-10 gap-8'}
        items-center h-14 w-full  shadow  
        relative  rounded-full 
        ${this.child?.presentToday === PresentToday.No ? ' text-faded ' : ' '} ${this.displayType === DisplayType.Attendance ? ' justify-start ' : ' justify-between   '}`
    }

    private getCheckMark() {
        return this.child?.checkedIn ? html`
            <check-mark></check-mark>` : html``
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-child': AppChild
    }
}
