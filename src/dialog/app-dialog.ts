import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';

@customElement('app-dialog')
export class AppDialog extends LitElement {
    @property({type: Boolean}) open = false;

    static styles = [globalStyleSheet];

    render() {
        return html`
            <div class="dialog-overlay" ?hidden="${!this.open}">
                <div class="dialog-content">
                    <slot></slot>
                    <button @click="${this._closeDialog}">Close</button>
                </div>
            </div>
        `;
    }

    private _closeDialog() {
        this.open = false;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-dialog': AppDialog;
    }
}
