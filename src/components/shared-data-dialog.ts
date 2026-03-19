import {html, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {SearchParamsService} from '../services/SearchParams.service.ts';
import {ShareUrlService} from '../services/ShareUrl.service.ts';
import {AttendanceStoreShare} from '../models/AttendanceStore.ts';
import {Txt} from '../translations/translations.ts';
import {PresentToday} from '../models/presentToday.ts';
import {TimeAndDateService} from '../services/TimeAndDate.service.ts';
import '../dialog/app-dialog.ts';
import {ChildStatus} from '../models/ChildStatus.ts';

@customElement('shared-data-dialog')
export class SharedDataDialog extends LitElement {
    @state() private _isDialogOpen = false;
    @state() private _sharedData: AttendanceStoreShare | null = null;
    
    private _shareUrlService: ShareUrlService = servicesProvider.getService(ShareUrlService);
    private _searchParamsService: SearchParamsService = servicesProvider.getService(SearchParamsService);
    private _timeAndDateService: TimeAndDateService = servicesProvider.getService(TimeAndDateService);

    connectedCallback() {
        super.connectedCallback();
        this._checkParams(this._searchParamsService.getParams());
        this._searchParamsService.subscribeToSearchParamsChange((params) => {
            this._checkParams(params);
        });
    }

    private _checkParams(params: URLSearchParams) {
        if (params.has(SearchParamsService.DATA_QUERY_PARAM)) {
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
        const presentCount = this._sharedData?.attendance.filter((c : ChildStatus) => !((c as any)?.onlySchoolBus  ) && c.presentToday === PresentToday.Yes).length || 0;
        const time = this._sharedData?.lastUpdated ? this._timeAndDateService.hoursAndMinutes(this._sharedData.lastUpdated) : '';
        const manualChildren = this._sharedData?.attendance.filter(c => c.manuallyAdded).map(c => c.name) || [];

        return html` 
                <app-dialog ?open="${this._isDialogOpen}" @close="${this._handleClose}">
                    <div class="text-center">
                        <h2 class="text-xl font-bold mb-4">${Txt.loadDataFromUrl}</h2>
                        ${this._sharedData ? html`
                            <div class="mb-4">
                                <div class="text-lg">נוכחות של ${presentCount} ילדים</div>
                                ${time ? html`<div class="text-sm text-gray-500">נשלח בשעה ${time}</div>` : ''}
                            </div>
                            ${manualChildren.length > 0 ? html`
                                <div class="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                                    <div class="text-sm font-medium text-gray-700 mb-1">${Txt.manualChildrenIncluded}</div>
                                    <div class="text-base font-bold text-primary mb-1 break-words px-2">${manualChildren.join(', ')}</div>
                                    <div class="text-sm font-medium text-gray-700">${Txt.addedManually}</div>
                                </div>
                            ` : ''}
                        ` : ''}
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
