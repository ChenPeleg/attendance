import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {ConfigurationService} from '../services/Configuration.service.ts';
import {SupersizeAnimationService} from '../services/SupersizeAnimationService.ts';


@customElement('app-navbar')
export class AppNavbar extends LitElement {

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
        setTimeout(() => {
            this.devAction()
        },500)
    }


    render() {
        return html`
            <div id="nav-bar-container h-16 flex flex-col z-10">
                <nav class="w-screen h-16 bg-gray-100 shadow  fixed text-primary bg-secondary top-0  z-10">
                    <div class="h-full flex flex-row shadow  gap-3">
                        <div class="h-full flex flex-row">
                            <side-menu-container>
                                <side-menu-content></side-menu-content>
                            </side-menu-container>
                        </div>
                        <div class="flex flex-row justify-between items-center w-full ">
                            <div class="   flex flex-row items-center gap-3 ">
                                <app-cockpit></app-cockpit>
                                ${this.getDevButton()}
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

    private getDevButton() {
        const configService = servicesProvider.getService(ConfigurationService);
        if (!configService.isDevMode()) {
            return ''
        }
        return html`
            <button .onclick="${()=>this.devAction()}" class="bg-secondary text-primary rounded-full cursor-pointer h-11 w-11 flex flex-row justify-center items-center">
                <span class="app-icon w-9 h-9"> \<\> </span>
            </button>`
    }

    private devAction() {
        const animationService = servicesProvider.getService(SupersizeAnimationService);
        animationService.showEmojiJumping()

    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-navbar': AppNavbar
    }
}
