import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import '../ui/check-mark/check-mark.ts'
import {ChildrenDisplayType, DisplayType} from '../models/AttendanceStore.ts';
import {Txt} from '../translations/translations.ts';
import {PresentToday} from '../models/presentToday.ts';



@customElement('app-child')
export class AppChild extends LitElement {
    @property({type: DisplayType}) displayType = DisplayType.Attendance;

    @property({type: Object}) child: ChildStatus | null = null;
    @property({type: Object}) childrenGridOrList: ChildrenDisplayType  = ChildrenDisplayType.List;
    @property({type: Function}) onClick: () => void = () => {
    };

    private getTestId() {
        const displayType = this.displayType === DisplayType.Attendance ? 'attend' : 'day-set';
        return `child_${this.child?.id}_${displayType}`
    }

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

   private getButtonStyle() {
        return `bg-secondary text-primary flex flex-row  
        ${this.childrenGridOrList === ChildrenDisplayType.Grid ? ' px-4' : '  px-10 '}
        items-center h-14 w-full  shadow  
        relative gap-8 rounded-full 
        ${this.child?.presentToday === PresentToday.No ? ' text-faded ' : ' '} ${this.displayType === DisplayType.Attendance ?  ' justify-start ' : ' justify-between   '}`
    }

    render() {
        return html`
            <button @click="${this.onClick}"
                    data-testid="${this.getTestId()}"
                    class=" ${this.getButtonStyle()} "
                    style="  border: none;  ">
                    <span id="check-mark-container"
                          class=" w-8 h-8 relative  mt-1 mr-1 ${this.displayType === DisplayType.DaySettings ?  'hidden' : 'absolute'}">
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
                    ${this.child?.name}  
                 </span>
                 <span  id="is-here-today" 
                      class="   ${this.displayType === DisplayType.Attendance ?  'hidden' : 'justify-self-end  '}">
                         
                      <span id="check-mark-container" class="  "
                      >
                        ${this.child?.presentToday === PresentToday.Yes ? Txt.present : Txt.absent} 
                      </span>
                 </span>
            </button>
        `
    }

    private getCheckMark() {

        return this.child?.checkedIn ? html`
            <check-mark> </check-mark>` : html``
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-child': AppChild
    }
}
