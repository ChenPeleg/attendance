import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';

@customElement('app-dialog')
export class AppDialog extends LitElement {
    @property({type: Boolean}) open = true;

    static styles = [globalStyleSheet, css`
        .backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%; 
            display: none;
            z-index: 10;
        }

        .backdrop.open {
            display: block;
        }

        .side-menu {
            position: fixed;
            top: 0;
            right: 0;
            width: 310px;
            height: 100%;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            z-index: 20;
        }

        .side-menu.open {
            transform: translateX(0);
        }
    `];

    render() {
        return html` 
        
            <dialog open  class="backdrop   opacity-70 fixed h-screen top-0 w-screen bg-amber-400" ?hidden="${!this.open}">
                <div class="dialog-content bg-amber-400">
                    <slot></slot>
                    <button @click="${this._closeDialog}">Close</button>
                </div>
            </dialog>
           
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
