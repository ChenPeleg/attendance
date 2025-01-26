import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';


@customElement('app-navbar')
export class AppNavbar extends LitElement {
    get hebrewDay() {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = {weekday: 'long'};
        return new Intl.DateTimeFormat('he-IL', options).format(date);
    }


    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html`
            <div id="nav-bar-container h-16 flex flex-col z-10">
            <nav class="w-screen h-16 bg-gray-100 shadow  fixed text-primary bg-secondary top-0  z-10"  >
                <div class="h-full flex flex-row shadow  gap-3">
                    <div class="h-full flex flex-row">
                        <side-menu-container>
                            <side-menu-content></side-menu-content>
                        </side-menu-container>
                    </div>
                    
                    <div class="flex flex-row justify-between items-center w-full ">
                        <div class="   flex flex-row items-center gap-3 ">
                             <app-cockpit></app-cockpit>

                            <theme-switch></theme-switch>
                        </div>
                        <div class="pl-3">
                            <span class=" ">   </span>

                        </div>

                    </div>

                </div>
            </nav>
                <div id="nav-bar-padding" class="block h-16"></div>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-navbar': AppNavbar
    }
}
