import {html, LitElement} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import '../main/app-main.ts'
import '../layout/app-navbar.ts'
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {SearchParamsService} from '../services/SearchParams.service.ts';


@customElement('app-root-layout-dialog')
export class AppRootLayoutDialog extends LitElement {
    @state() private _isDialogOpen = false;

    private _searchParamsService: SearchParamsService = servicesProvider.getService(SearchParamsService);

    connectedCallback() {
        super.connectedCallback();
        this._checkDialogState(this._searchParamsService.getParams());
        this._searchParamsService.subscribeToSearchParamsChange((params) => {
            this._checkDialogState(params);
        });
    }

    private _checkDialogState(params: URLSearchParams) {
        this._isDialogOpen = params.has('dialog');
    }

    private _handleDialogClose() {
        const params = this._searchParamsService.getParams();
        params.delete('dialog');
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        history.pushState({}, '', newUrl);
    }

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }


    render() {
        return html` 
                <app-dialog ?open="${this._isDialogOpen}" @close="${this._handleDialogClose}"></app-dialog> 

        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-root-layout-dialog': AppRootLayoutDialog
    }
}
