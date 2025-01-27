import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {BackgroundImageService} from '../services/BackgroundImage.service.ts';


@customElement('bg-image')
export class BgImage extends LitElement {

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    getImageNumber() {
        return Math.floor(Math.random() * 5) + 1
    }

    render() {
        return html`
            <div class="fixed" style="z-index: -1">
                <div id="bg-image" class=" w-full h-full fixed flex flex-col z-10 bg-red-100   z-0">
                    <img src="${this.getImageUrl()}" class="w-full h-full object-cover" alt="bg-image">
                </div>
            </div>

        `
    }

    private getImageUrl() {
        const backgroundService = servicesProvider.getService(BackgroundImageService)
        return backgroundService.getImageUrl()
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'bg-image': BgImage
    }
}
