import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {Txt} from '../translations/translations.ts';

@customElement('app-dialog')
export class AppDialog extends LitElement {
    @property({type: Boolean}) open = false;

    static styles = [globalStyleSheet, css`
        .backdrop {
            background-color: rgba(0, 0, 0, 0.5);
        }
    `];

    render() {
        if (!this.open) {
            return html``;
        }
        return html` 
            <div @click="${this._handleBackdropClick}" class="backdrop fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
                <div class="bg-primary text-primary rounded-lg shadow-xl p-6 w-full max-w-md mx-4 relative z-50">
                    <slot></slot>
                    <div class="mt-4 flex justify-end">
                        <button @click="${this._closeDialog}" class="bg-secondary rounded-full text-primary px-6 py-2   app-shadow cursor-pointer">${Txt.close}</button>
                    </div>
                </div>
            </div>
        `;
    }

    private _handleBackdropClick(e: Event) {
        if (e.target === e.currentTarget) {
            this._closeDialog();
        }
    }

    private _closeDialog() {
        this.open = false;
        this.dispatchEvent(new CustomEvent('close', {bubbles: true, composed: true}));
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'app-dialog': AppDialog;
    }
}
