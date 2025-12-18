import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {Txt} from '../translations/translations.ts';
import clearIcon from '../assets/svg/clear-broom-icon.svg'
import addChild from '../assets/svg/addchild.svg'

import {globalStore} from '../store/Store.ts';
import {ActionType} from '../models/AppAction.ts';
import {ConfigurationService} from '../services/Configuration.service.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';

@customElement('side-menu-content')
export class SideMenuContent extends LitElement {
    static INSTALL_APP_BUTTON_ID = 'install-app-button';


    firstUpdated() {
        if (!this.shadowRoot) {
            return;
        }
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];

    }


    onReset() {
        globalStore.dispatch({
            type: ActionType.clearAllData,
            payload: null
        })
    }

    render() {
        const env = servicesProvider.getService(ConfigurationService).environment
        return html`
            <div class="flex flex-col gap-4 ">
                <div class="h-14 w-full flex-row flex justify-between gap-5">
                    <div class="${env === 'production' ? 'hidden' : 'contents'}"> 
                        <app-dialog></app-dialog>
                    </div>
               
                    <span>
                    ${Txt.addChild}
                        
                    </span>
                    <span>
                             <button @click=${() => this.addChild()}
                                     class=" bg-secondary rounded-md  h-10 cursor-pointer flex flex-row px-3 justify-center items-center ">
                        <img src=${addChild} class="w-7 h-7 app-icon" alt="menu"/>
                    </button>
                    </span>
                </div>
                <div class="h-14 w-full flex-row flex justify-between gap-5">
                    <span>
                    ${Txt.resetData}
                        
                    </span>
                    <span>
                             <button @click=${() => this.onReset()}
                                     class=" bg-secondary rounded-md  h-10 cursor-pointer flex flex-row px-3 justify-center items-center ">
                        <img src=${clearIcon} class="w-7 h-7 app-icon" alt="menu"/>
                    </button>
                    </span>
                </div>
                <div class="h-14 w-full flex-row flex justify-between gap-5">
                    <span>
                    ${Txt.displayTheme}
                        
                    </span>
                    <span>
                           <theme-switch></theme-switch>
                    </span>
                </div>
                <div class="  w-full  ">
                    <children-display-button></children-display-button>
                </div>
                <div class="  w-full  ">
                    <sorting-options></sorting-options>
                </div>
                <div class="  w-full  ">
                    <install-pwa-button></install-pwa-button>
                </div>
                <div class="  w-full  ">
                    <p class="text-sm">🛈 ${Txt.appInfo}</p>
                </div>
            </div>
        `;
    }


    private addChild() {
        const childName = prompt(Txt.enterChildName);
        if (!childName) {
            return;
        }
        globalStore.dispatch({
            type: ActionType.addChild,
            payload: childName
        })
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'side-menu-content': SideMenuContent;
    }
}
