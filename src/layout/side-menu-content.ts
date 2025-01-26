import {html, LitElement} from 'lit';
import {customElement } from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {Txt} from '../translations/translations.ts';
import clearIcon from '../assets/svg/clear-broom-icon.svg'
import addChild from '../assets/svg/addchild.svg'
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
            <div class="flex flex-col gap-4">
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
}

declare global {
    interface HTMLElementTagNameMap {
        'side-menu-content': SideMenuContent;
    }
}
