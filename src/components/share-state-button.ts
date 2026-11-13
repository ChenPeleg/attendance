import {html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import {Txt} from '../translations/translations.ts';
import copyImage from '../assets/svg/copy-content.svg'
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {ShareUrlService} from '../services/ShareUrl.service.ts';
import {StateDecoderEncoderService} from '../services/StateDecoderEncoder.service.ts';
import {StoreService} from '../services/Store.service.ts';
import {AppBaseComponent} from '../mixins/GlobalStylesheetMixin.ts';


@customElement('share-state-button')
export class ShareStateButton extends AppBaseComponent(LitElement) {


    async clickOption(): Promise<void> {
        const shareUrlService = servicesProvider.getService(ShareUrlService);
        const decoder = servicesProvider.getService(StateDecoderEncoderService)
      const state = servicesProvider.getService(StoreService).store.getState()
        const result = decoder.encode({
            attendance :
            state
            .attendance,
            history : []
        })
        console.log('result', result)

        await shareUrlService.shareStateUrl();
    }


    render() {
        return html`
            <div class="menu-item w-full">
                    <span>
                    ${Txt.shareList}
                    </span>
                <span>
                             <button @click=${() => this.clickOption()}
                                     data-testid="share-data-button"
                                     class="menu-icon-btn" style="--icon-bubble: var(--bubble-green)">
                        <img src="${copyImage}" class="w-7 h-7 app-icon"
                             alt="menu"/>
                    </button>
                    </span>
            </div>

        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'share-state-button': ShareStateButton
    }
}
