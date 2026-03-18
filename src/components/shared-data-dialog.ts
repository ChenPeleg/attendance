import {html, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {SearchParamsService} from '../services/SearchParams.service.ts';
import {ShareUrlService} from '../services/ShareUrl.service.ts';
import {AttendanceStoreShare} from '../models/AttendanceStore.ts';
import {Txt} from '../translations/translations.ts';
import '../dialog/app-dialog.ts';

@customElement('shared-data-dialog')
export class SharedDataDialog extends LitElement {
    @state() private _isDialogOpen = false;
    @state() private _sharedData: AttendanceStoreShare | null = null;
    
    private _shareUrlService: ShareUrlService = servicesProvider.getService(ShareUrlService);
    private _searchParamsService: SearchParamsService = servicesProvider.getService(SearchParamsService);

    connectedCallback() {
        super.connectedCallback();
        this._checkParams(this._searchParamsService.getParams());
        this._searchParamsService.subscribeToSearchParamsChange((params) => {
            this._checkParams(params);
        });
    }

    private _checkParams(params: URLSearchParams) {
        if (params.has('data')) {
            const data = this._shareUrlService.getSharedDataFromUrl();
            if (data) {
                this._sharedData = data;
                this._isDialogOpen = true;
                return;
            }
        }
        this._isDialogOpen = false;
    }

    private _handleClose = () => {
         this._isDialogOpen = false;
         this._searchParamsService.patchParams({data: null});
    }

    private _handleLoadData = () => {
        if (this._sharedData) {
            this._shareUrlService.loadSharedData(this._sharedData);
            this._handleClose();
        }
    }

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html` 
                <app-dialog ?open="${this._isDialogOpen}" @close="${this._handleClose}">
                    <div class="text-center">
                        <h2 class="text-xl font-bold mb-4">${Txt.loadDataFromUrl}</h2>
                    </div>
                    <div slot="footer" class="w-full flex justify-center gap-4 mt-6">
                            <button @click="${this._handleLoadData}" class="bg-success text-primary rounded-full px-6 py-2 app-shadow cursor-pointer pointer-events-auto">
                                ${Txt.yes}
                            </button>       
                            <button @click="${this._handleClose}" class="bg-secondary text-primary rounded-full px-6 py-2 app-shadow cursor-pointer pointer-events-auto">
                                ${Txt.no}
                            </button>
                    </div>
                </app-dialog> 
        `
    }
}
