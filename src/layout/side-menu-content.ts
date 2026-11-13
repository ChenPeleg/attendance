import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {Txt} from '../translations/translations.ts';
import clearIcon from '../assets/svg/clear-broom-icon.svg'
import advanceDataIcon from '../assets/svg/advance-data.svg'
import addChild from '../assets/svg/addchild.svg'

import {globalStore} from '../store/Store.ts';
import {ActionType} from '../models/AppAction.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {SearchParamsService} from '../services/SearchParams.service.ts';
import {DevModeService} from '../services/DevMode.service.ts';

@customElement('side-menu-content')
export class SideMenuContent extends LitElement {
    static INSTALL_APP_BUTTON_ID = 'install-app-button';


    firstUpdated() {
        if (!this.shadowRoot) {
            return;
        }
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];

    }

    openAdvanced() {
       servicesProvider.getService(SearchParamsService).patchParams({
           dialog: 'lists'
       })
    }
    onReset() {
        globalStore.dispatch({
            type: ActionType.clearAllData,
            payload: null
        })
    }

    render() {

        return html`
            <div class="flex flex-col gap-3 ">
                <div class="menu-item w-full">


                    <span>
                    ${Txt.addChild}

                    </span>
                    <span>
                             <button @click=${() => this.addChild()}
                                     data-testid="add-child-button"
                                     class="menu-icon-btn" style="--icon-bubble: var(--bubble-red)">
                        <img src=${addChild} class="w-7 h-7 app-icon" alt="menu"/>
                    </button>
                    </span>
                </div>
                <div class="menu-item w-full">
                    <span>
                    ${Txt.resetData}
                        
                    </span>
                    <span>
                             <button @click=${() => this.onReset()}
                                     class="menu-icon-btn" style="--icon-bubble: var(--bubble-yellow)">
                        <img src=${clearIcon} class="w-7 h-7 app-icon" alt="menu"/>
                    </button>
                    </span>
                </div>
                <div class="menu-item w-full">
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
                    <share-state-button></share-state-button>
                </div>
                <div class="menu-item w-full">
                    <span>
                    ${Txt.advanced}

                    </span>
                    <span>
                             <button @click=${() => this.openAdvanced()}
                                     data-testid="advanced-button"
                                     class="menu-icon-btn" style="--icon-bubble: var(--bubble-orange)">
                        <img src=${advanceDataIcon} class="w-7 h-7 app-icon" alt="menu"/>
                    </button>
                    </span>
                </div>
                <div class="  w-full  ">
                    <sorting-options></sorting-options>
                </div>
          
                <div class="  w-full  ">
                    <install-pwa-button></install-pwa-button>
                </div>
                <div class="  w-full  ">
                    <p class="text-sm text-faded px-1" @click=${() => this.onAppInfoClick()}>🛈 ${Txt.appInfo}</p>
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

    private onAppInfoClick() {
        const devModeService = servicesProvider.getService(DevModeService);
        const activated = devModeService.registerClick();
        if (activated) {
            alert(Txt.devMode);
        }
    }

}

declare global {
    interface HTMLElementTagNameMap {
        'side-menu-content': SideMenuContent;
    }
}
