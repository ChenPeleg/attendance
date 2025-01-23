import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import busIcon from '../assets/svg/bus.svg'
import childIcon from '../assets/svg/child.svg'
import dayIcon from '../assets/svg/day.svg'
import {Txt} from '../translations/translations.ts';
import {DisplayType} from '../models/AttendanceStore.ts';

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

    @property({type: Function}) onClick: (displayType : DisplayType) => void = () => {
    };


    @property({type: DisplayType}) displayType = DisplayType.Attendance;

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    renderButton(button: CockpitButton) {
        const isActive = this.displayType === button.id;
        return html`
            <button @click=${()=>this.onClick(button.id)} class="h-10 cursor-pointer flex flex-row px-3 justify-center items-center 
            transition-all ease-in-out duration-300
           ${isActive ? 'bg-fuchsia-200' : 'bg-fuchsia-50'}  
            rounded shadow gap-2" style="  border: none">
                <img src=${button.icon} class="w-7 h-7 " alt="menu"/>
                <span>${button.label}</span>
            </button>
        `
    }



    render() {
        return html`
            <div class="flex flex-col items-start justify-center pt-4   ">
                <div class="flex flex-row gap-3 flex-wrap">
                    ${this.buttons.map(button => this.renderButton(button))}
                </div> 
                <slot></slot>
            </div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'app-cockpit': AppCockpit
    }
}
