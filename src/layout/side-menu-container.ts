import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { globalStyleSheet } from "../styles/global-style-sheet.ts";

import menuButton from "../assets/svg/menu-button.svg";
import cancelButton from "../assets/svg/cancel.svg";
import { Txt } from "../translations/translations.ts";

@customElement("side-menu-container")
export class SideMenuContainer extends LitElement {
  static styles = [
    globalStyleSheet,
    css`
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
        border-radius: 28px 0 0 28px;
        overflow: hidden;
        box-shadow: -6px 0 20px rgba(0, 0, 0, 0.2);
      }

      .side-menu:not(.open) {
        box-shadow: none;
      }

      .menu-header {
        border-radius: 0 0 0 26px;
        box-shadow: 0 4px 0 var(--card-shadow-color);
        font-size: 22px;
        font-weight: 700;
        padding-inline-start: 4.5rem;
      }

      .menu-button {
        border: none;
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 14px;
        cursor: pointer;
        background-color: var(--menu-button-color);
      }

      .side-menu.open {
        transform: translateX(0);
      }
    `,
  ];
  @state() private isOpen = false;

  render() {
    return html`
      <div
        id="menu-container"
        class="  w-12 h-full flex flex-col justify-center items-center  "
      >
        <div
          class="backdrop playful-backdrop ${this.isOpen ? "open" : ""}"
          @click=${this.closeMenu}
        ></div>
        <div class="side-menu bg-primary ${this.isOpen ? "open" : ""}">
          <div class="menu-header bg-header h-16 flex flex-row items-center">
            ${Txt.menu}
          </div>
          <div class="max-h-screen overflow-x-hidden  ">
            <div class="p-4 min-h-screen">
              <slot></slot>
            </div>
          </div>
        </div>

        <div id="button-container" class="absolute z-50">
          <button
            @click=${this.toggleMenu}
            data-testid="menu-toggle"
            class="menu-button flex flex-col justify-center items-center z-50"
          >
            <span class="relative flex-col justify-center items-center flex ">
              <img
                src=${menuButton}
                class="app-icon absolute transition-opacity ease-in-out duration-200 ${this
                  .isOpen
                  ? "opacity-0"
                  : "opacity-100"}"
                alt="menu"
              />
              <img
                src=${cancelButton}
                class="app-icon absolute transition-opacity ease-in-out duration-200 ${!this
                  .isOpen
                  ? "opacity-0"
                  : "opacity-100"}"
                alt="close-menu"
              />
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
    "side-menu-container": SideMenuContainer;
  }
}
