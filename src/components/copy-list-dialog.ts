import {html, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {SearchParamsService} from '../services/SearchParams.service.ts';
import '../dialog/app-dialog.ts';
import './copy-children-list.ts';
import {WithGlobalStylesheet} from '../mixins/GlobalStylesheetMixin.ts';

@customElement('copy-list-dialog')
export class CopyListDialog extends WithGlobalStylesheet(LitElement) {
    @state() private _isDialogOpen = false;
    
    private _searchParamsService: SearchParamsService = servicesProvider.getService(SearchParamsService);

    connectedCallback() {
        super.connectedCallback();
        this._checkParams(this._searchParamsService.getParams());
        this._searchParamsService.subscribeToSearchParamsChange((params) => {
            this._checkParams(params);
        });
    }

    private _checkParams(params: URLSearchParams) {
        const dialogType = params.get('dialog');
        this._isDialogOpen = dialogType === 'lists';
    }

    private _handleClose() {
        this._searchParamsService.patchParams({dialog: null});
    }

    render() {
        return html` 
                <app-dialog ?open="${this._isDialogOpen}" @close="${this._handleClose}">
                    ${this._isDialogOpen ? html`<copy-children-list></copy-children-list>` : html``}
                </app-dialog> 
        `
    }
}

