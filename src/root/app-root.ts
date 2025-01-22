import {  html, LitElement } from 'lit'
import {customElement } from 'lit/decorators.js'

import './app-root-layout.ts'

@customElement('app-root')
export class AppRoot extends LitElement {

    render() {
        return html`
            <div class="contents">
                <app-root-layout></app-root-layout>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-root': AppRoot
    }
}
