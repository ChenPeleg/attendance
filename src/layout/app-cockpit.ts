import {html, LitElement} from 'lit'
import {customElement,   state} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import busIcon from '../assets/svg/bus.svg'
import childIcon from '../assets/svg/child.svg'
import dayIcon from '../assets/svg/day.svg'
import clearIcon from '../assets/svg/clear-broom-icon.svg'
import {Txt} from '../translations/translations.ts';
import {AttendanceStore, DisplayType} from '../models/AttendanceStore.ts';
import {globalStore} from '../store/Store.ts';
import {ActionType} from '../models/AppAction.ts';

interface CockpitButton {
    label: string,
    id: DisplayType,
    icon: string
}


const SHOW_SCHOOL_BUS = false;

@customElement('app-cockpit')
export class AppCockpit extends LitElement {
    buttons: CockpitButton[] = [{
        label: Txt.attendance,
        id: DisplayType.Attendance,
        icon: childIcon
    }, {
        label: Txt.daySettings,
        id: DisplayType.DaySettings,
        icon: dayIcon

    },SHOW_SCHOOL_BUS ? {
        label: Txt.schoolBus,
        id: DisplayType.SchoolBus,
        icon: busIcon
    } : null].filter(Boolean) as CockpitButton[];
    @state() storeState: AttendanceStore | null = globalStore.getState();
    private cockPitClick:  (displayType : DisplayType) => void = (displayType) => {
        globalStore.dispatch({
            type: ActionType.changeDisplay,
            payload: displayType
        });
    }
    onReset() {
        globalStore.dispatch({
            type: ActionType.clearAllData,
            payload: null
        })
    }
    private displayType: DisplayType = this.storeState?.display || DisplayType.Attendance;

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
        globalStore.subscribe((state: AttendanceStore) => {
            this.storeState = state;
            this.displayType = state.display;
            this.requestUpdate();
        })
    }

    renderButton(button: CockpitButton) {
        const isActive = this.displayType === button.id;
        return html`
            <button @click=${()=>this.cockPitClick(button.id)} class="h-10 cursor-pointer flex flex-row px-3 justify-center items-center bg-secondary text-primary 
            transition-all ease-in-out duration-300
           ${isActive ? ' bg-accent' : ' bg-secondary'}  
            rounded shadow gap-2" style="  border: none">
                <img src=${button.icon} class="w-7 h-7 app-icon" alt="menu"/>
                <span>${button.label}</span>
            </button>
        `
    }



    render() {
        return html`
            <div class="flex flex-col items-start justify-center pt-4   ">
                <div class="flex flex-row gap-3 flex-wrap">
                    ${this.buttons.map(button => this.renderButton(button))}
                    <button style="  border: none"  @click=${()=>this.onReset()} 
                            class="${this.displayType !== DisplayType.DaySettings ? 'hidden' : 'bg-secondary' } h-10 cursor-pointer flex flex-row px-3 justify-center items-center ">
                        <img src=${clearIcon} class="w-7 h-7 app-icon" alt="menu"/>
                    </button>
                </div>  
            </div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'app-cockpit': AppCockpit
    }
}
