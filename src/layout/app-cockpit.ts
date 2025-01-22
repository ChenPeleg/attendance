import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'

import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {globalStore} from '../store/Store.ts';
import busIcon from '../assets/svg/bus.svg'
import childIcon from '../assets/svg/child.svg'
import dayIcon from '../assets/svg/day.svg'

interface CockpitButton {
    name: string,
    id: string,
    icon: string
}

@customElement('app-cockpit')
export class AppCockpit extends LitElement {
    buttons:CockpitButton[] = [{
        name: 'attendance',
        id: 'attendance',
        icon:childIcon
    }, {
        name: 'schoolBus',
        id: 'schoolBus',
        icon: busIcon
    }, {
        name: 'daySettings',
        id: 'daySettings',
        icon: dayIcon

    }]
    @property({type: Number}) count = 0;

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }
    renderButton(button:CockpitButton) {
        return html`
            <button class="h-full flex flex-row px-3 justify-center items-center" style="  border: none"> 
              
                    <img src=${button.icon} class=" " alt="menu"/>
             <span>${button}</span>
            </button>
        `
    }


    render() {
        return html`
            <div class="flex flex-col items-center justify-center bg-amber-100">
                <div>
                   
                    ${this.buttons.map(button => this.renderButton(button))}
                </div>
                <div class="card">
                    <button @click=${this._onClick}>
                        count is ${this.count}
                    </button>
                </div>
                <slot></slot>
            </div>
        `
    }


    private _onClick() {
        globalStore.setState({
            count: this.count + 1,
            children: []
        })
        // this.count++
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-cockpit': AppCockpit
    }
}
