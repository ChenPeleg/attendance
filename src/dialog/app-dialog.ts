import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {Txt} from '../translations/translations.ts';

@customElement('app-dialog')
export class AppDialog extends LitElement {
    @property({type: Boolean}) open = false;

    static styles = [globalStyleSheet, css`
        .backdrop {
            background-color: var(--backdrop-color);
        }

        .dialog-panel {
            border-radius: 28px;
            box-shadow: 0 8px 0 var(--card-shadow-color), 0 20px 40px rgba(0, 0, 0, 0.25);
        }
    `];

    render() {
        if (!this.open) {
            return html``;
        }
        return html` 
            <div @click="${this._handleBackdropClick}" class="backdrop fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
                <div class="dialog-panel bg-primary text-primary p-6 w-full max-w-md mx-4 relative z-50">
                    <slot></slot>
                    <div class="mt-4 flex justify-end">
                        <slot name="footer">
                        <button @click="${this._closeDialog}" class="playful-btn">${Txt.close}</button>
                        </slot>
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
