import {css, html, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';

import menuButton from '../assets/svg/menu-button.svg';
import cancelButton from '../assets/svg/cancel.svg';

@customElement('side-menu-container')
export class SideMenuContainer extends LitElement {
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
            width: 250px;
            height: 100%;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            z-index: 20;
        }

        .side-menu.open {
            transform: translateX(0);
        }
    `];
    @state() private isOpen = true;

    render() {
        return html`
            <div id="menu-container" class="  w-12 h-full flex flex-col justify-center items-center  ">


                <div class="backdrop bg-gray-900 opacity-70 ${this.isOpen ? 'open' : ''}" @click=${this.closeMenu}></div>
                <div class="side-menu bg-primary ${this.isOpen ? 'open' : ''}">
                    <div class="h-14 w-10"> </div>
                    <div class="p-4">
                    <slot></slot>
                        
                    </div>
                </div>
                <div id="button-container" class="absolute z-50">

                    <button @click=${this.toggleMenu}
                            class=" bg-yellow-200 h-full flex flex-col justify-center items-center bg-secondary z-50"
                            style="border: none">
                        <span class="relative flex-col justify-center items-center flex ">
                                <img src=${menuButton} class="app-icon absolute transition-opacity ease-in-out duration-200 ${this.isOpen ? 'opacity-0' : 'opacity-100'}"  alt="menu"/>
                                <img src=${cancelButton} class="app-icon absolute transition-opacity ease-in-out duration-200 ${!this.isOpen ? 'opacity-0' : 'opacity-100'}" alt="close-menu"/>
                        </span> 
                    </button>
                </div>
            </div>
        `;
    }

    private toggleMenu() {
        this.isOpen = !this.isOpen;
    }

    private closeMenu() {
        this.isOpen = false;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'side-menu-container': SideMenuContainer;
    }
}
