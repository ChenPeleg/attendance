import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import busIcon from '../assets/svg/bus.svg'
import childIcon from '../assets/svg/child.svg'
import dayIcon from '../assets/svg/day.svg'
import {Txt} from '../translations/translations.ts';

interface CockpitButton {
    label: string,
    id: string,
    icon: string
}

const SHOW_SCHOOL_BUS = false;

@customElement('app-cockpit')
export class AppCockpit extends LitElement {
    buttons: CockpitButton[] = [{
        label: Txt.attendance,
        id: 'attendance',
        icon: childIcon
    }, {
        label: Txt.daySettings,
        id: 'daySettings',
        icon: dayIcon

    },SHOW_SCHOOL_BUS ? {
        label: Txt.schoolBus,
        id: 'schoolBus',
        icon: busIcon
    } : null].filter(Boolean) as CockpitButton[];
    @property({type: Number}) count = 0;

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    renderButton(button: CockpitButton) {
        return html`
            <button @click=${()=>this._onClick(button.id)} class="h-10 cursor-pointer flex flex-row px-3 justify-center items-center bg-fuchsia-50 rounded shadow gap-2" style="  border: none">
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


    private _onClick(buttonId: string) {
        console.log(buttonId)
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-cockpit': AppCockpit
    }
}
