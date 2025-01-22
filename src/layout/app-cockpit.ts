import {  html, LitElement } from 'lit'
import {customElement, property} from 'lit/decorators.js'

import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {globalStore} from '../store/Store.ts';


@customElement('app-cockpit')
export class AppCockpit extends LitElement {

    @property({type: Number})
    count = 0;
    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }


    render() {
        return html`
            <div class="flex flex-col items-center justify-center bg-amber-100">  
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
        globalStore.setState({count: this.count + 1, children:[]})
        // this.count++
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-cockpit': AppCockpit
    }
}
