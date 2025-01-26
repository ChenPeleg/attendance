import {html, LitElement, css} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';

import menuButton from '../assets/svg/menu-button.svg';

@customElement('side-menu-container')
export class SideMenuContainer extends LitElement {
    @state() private isOpen = false;

    static styles = [
        globalStyleSheet,
        css`
            .backdrop {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: none;
                z-index: 10;
            }
            .backdrop.open {
                display: block;
            }
            .side-menu {
                position: fixed;
                top: 0;
                left: 0;
                width: 250px;
                height: 100%;
                background: white;
                transform: translateX(-100%);
                transition: transform 0.3s ease;
                z-index: 20;
            }
            .side-menu.open {
                transform: translateX(0);
            }
        `
    ];

    private toggleMenu() {
        this.isOpen = !this.isOpen;
    }

    private closeMenu() {
        this.isOpen = false;
    }

    render() {
        return html`
            <button @click=${this.toggleMenu} class=" bg-yellow-200 h-full flex flex-col justify-center items-center bg-secondary" style="border: none">
                <a href="#abc">
                    <img src=${menuButton} class="app-icon" alt="menu"/>
                </a>
            </button>
            <div class="backdrop ${this.isOpen ? 'open' : ''}" @click=${this.closeMenu}></div>
            <div class="side-menu ${this.isOpen ? 'open' : ''}">
              <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'side-menu-container': SideMenuContainer;
    }
}
