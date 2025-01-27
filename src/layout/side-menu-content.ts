import {html, LitElement} from 'lit';
import {customElement } from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {Txt} from '../translations/translations.ts';
import clearIcon from '../assets/svg/clear-broom-icon.svg'
import addChild from '../assets/svg/addchild.svg'
import installMobile from '../assets/svg/install-mobile.svg'
import {globalStore} from '../store/Store.ts';
import {ActionType} from '../models/AppAction.ts';
@customElement('side-menu-content')
export class SideMenuContent extends LitElement {


    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }
    onReset() {
        globalStore.dispatch({
            type: ActionType.clearAllData,
            payload: null
        })
    }

    render() {
        return html`
            <div class="flex flex-col gap-4 ">
                <div class="h-14 w-full flex-row flex justify-between gap-5">
                    <span>
                    ${Txt.addChild}
                        
                    </span>
                    <span>
                             <button   @click=${()=>this.addChild()}
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
                             <button   @click=${()=>this.onReset()}
                                       class=" bg-secondary rounded-md  h-10 cursor-pointer flex flex-row px-3 justify-center items-center ">
                        <img src=${clearIcon} class="w-7 h-7 app-icon" alt="menu"/>
                    </button>
                    </span>
                </div>
                <div class="h-14 w-full flex-row flex justify-between gap-5">
                    <span>
                    ${Txt.display}
                        
                    </span>
                    <span>
                           <theme-switch></theme-switch>
                    </span>
                </div>   
                <div class="  w-full  ">
                    <sorting-options></sorting-options>
                </div>  
                <div class="  w-full  ">
                    <button @click="${() => this.installApp()}"
                            class="h-11 relative flex flex-row justify-center w-full bg-secondary text-primary rounded-md cursor-pointer">
                 <span class="absolute right-0 px-3 w-8 h-9 flex-row flex justify-center items-center ">
                    <img class="app-icon w-7 h-7   " src="${installMobile}" alt="checked sort">
                 </span>
                        <span>
                        ${Txt.installApp}
                  </span>
                    </button>
                </div> 
                <div class="  w-full  ">
                   <p class="text-sm">🛈  ${Txt.appInfo}</p>
                </div>
            </div>
        `;
    }


    private addChild() {
        const childName = prompt(Txt.enterChildName);
        globalStore.dispatch({
            type: ActionType.addChild,
            payload: childName
        })
    }

    private installApp() {

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'side-menu-content': SideMenuContent;
    }
}
