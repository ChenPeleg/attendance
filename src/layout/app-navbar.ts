import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {Txt} from '../translations/translations.ts';
import menuButton from '../assets/svg/menu-button.svg'


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
            <nav class="w-full h-16 bg-gray-100 shadow  relative text-primary bg-secondary"  >
                <div class="h-full flex flex-row shadow  gap-3">
                    <div class="h-full flex flex-row">
                        <button class="h-full flex flex-col justify-center items-center bg-secondary" style="  border: none">
                            <a href="#abc">
                                <img src=${menuButton} class=" " alt="menu"/>
                            </a>
                        </button>
                       
                    </div>
                    
                    <div class="flex flex-row justify-between items-center w-full ">
                        <div class="   flex flex-row items-center gap-3 ">
                        <span>    ${Txt.attendance} ${Txt.pistachio}  </span>

                            <theme-switch></theme-switch>
                        </div>
                        <div class="pl-3">
                            <span class=" "> ${this.hebrewDay.replace(Txt.day, '')} </span>

                        </div>

                    </div>

                </div>
            </nav>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-navbar': AppNavbar
    }
}
