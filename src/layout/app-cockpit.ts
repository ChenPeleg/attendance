import {html, LitElement} from 'lit'
import {customElement,   state} from 'lit/decorators.js'
import busIcon from '../assets/svg/bus.svg'
import childIcon from '../assets/svg/child.svg'
import dayIcon from '../assets/svg/day.svg'

import {Txt} from '../translations/translations.ts';
import {AttendanceStore, DisplayType} from '../models/AttendanceStore.ts';
import {globalStore} from '../store/Store.ts';
import {ActionType} from '../models/AppAction.ts';
import {AppBaseComponent} from '../mixins/GlobalStylesheetMixin.ts';

interface CockpitButton {
    label: string,
    id: DisplayType,
    icon: string
}


const SHOW_SCHOOL_BUS = true;

@customElement('app-cockpit')
export class AppCockpit extends AppBaseComponent(LitElement) {
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
            type: ActionType.changeDisplayedTab,
            payload: displayType
        });
    }

    private displayType: DisplayType = this.storeState?.display || DisplayType.Attendance;

    firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
        super.firstUpdated(changedProperties);
        globalStore.subscribe((state: AttendanceStore) => {
            this.storeState = state;
            this.displayType = state.display;
            this.requestUpdate();
        })
    }

    renderButton(button: CockpitButton) {
        const isActive = this.displayType === button.id;
        return html`
            <div class="flex flex-row items-center">
            <button @click=${()=>this.cockPitClick(button.id)} data-testid="nav_${button.id}" class="h-10 px-3 cursor-pointer flex flex-row
              ${isActive ? ' bg-tab-active font-bold ' : ' ' }
             justify-center items-center
            transition-all ease-in-out duration-300
            rounded-full"
             style="border: none; white-space: nowrap; ${isActive ? 'color: var(--tab-active-text-color);' : 'background-color: transparent; color: var(--header-text-color);'}">
                <span>${button.label}</span>
            </button>
            </div>
        `
    }



    render() {
        return html`
            <div class="flex flex-col items-start justify-center   ">
                <div class="grid grid-cols-3 gap-1 flex-wrap">
                    ${this.buttons.map(button => this.renderButton(button))}
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
