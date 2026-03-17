import {html, LitElement} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import '../main/app-main.ts'
import '../layout/app-navbar.ts'
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {SearchParamsService} from '../services/SearchParams.service.ts';
import {ShareUrlService} from '../services/ShareUrl.service.ts';
import {AttendanceStoreShare} from '../models/AttendanceStore.ts';
import {Txt} from '../translations/translations.ts';


@customElement('app-root-layout-dialog')
export class AppRootLayoutDialog extends LitElement {
    @state() private _isDialogOpen = false;
    @state() private _dialogType : '' | 'lists' | 'shared-data'=  '';
    @state() private _sharedData: AttendanceStoreShare | null = null;
    
    private _shareUrlService: ShareUrlService = servicesProvider.getService(ShareUrlService);
    private _searchParamsService: SearchParamsService = servicesProvider.getService(SearchParamsService);

    connectedCallback() {
        super.connectedCallback();
        this._checkDialogState(this._searchParamsService.getParams());
        this._searchParamsService.subscribeToSearchParamsChange((params) => {
            this._checkDialogState(params);
        });
    }

    private _checkDialogState(params: URLSearchParams) {
        if (params.has('data')) {
            const data = this._shareUrlService.getSharedDataFromUrl();
            if (data) {
                this._sharedData = data;
                this._dialogType = 'shared-data';
                this._isDialogOpen = true;
                return;
            }
        }
        this._isDialogOpen = params.has('dialog');
        this._dialogType = params.get('dialog') as '' | 'lists' || '';
    }

    private _handleDialogClose() {
        if (this._dialogType === 'shared-data') {
             this._isDialogOpen = false;
             // Optional: clear data param if cancelled?
             return;
        }
        this._searchParamsService.patchParams({dialog: null});
    }

    private _handleLoadData() {
        if (this._sharedData) {
            this._shareUrlService.loadSharedData(this._sharedData);
            this._isDialogOpen = false;
        }
    }

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }


    render() {
        return html` 
                <app-dialog ?open="${this._isDialogOpen}" @close="${this._handleDialogClose}">
                    ${this._dialogType === 'lists' ? html`<copy-children-list></copy-children-list> ` : html``}
                    ${this._dialogType === 'shared-data' ? html`
                        <div class="text-center">
                            <h2 class="text-xl font-bold mb-4">${Txt.loadDataFromUrl}</h2>
                        </div>
                        <div slot="footer" class="w-full flex justify-center gap-4 mt-6">
                                <button @click="${this._handleLoadData}" class="bg-success text-primary rounded-full px-6 py-2 app-shadow cursor-pointer pointer-events-auto">
                                    ${Txt.yes}
                                </button>       
                                <button @click="${() => this._isDialogOpen = false}" class="bg-secondary text-primary rounded-full px-6 py-2 app-shadow cursor-pointer pointer-events-auto">
                                    ${Txt.no}
                                </button>
                        </div>
                    ` : html``}
                </app-dialog> 

        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-root-layout-dialog': AppRootLayoutDialog
    }
}
