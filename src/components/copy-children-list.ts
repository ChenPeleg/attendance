import {html, LitElement} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import copyIcon from '../assets/svg/copy-content.svg'
import {Txt} from '../translations/translations.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import {globalStore} from '../store/Store.ts';
import {AttendanceStore} from '../models/AttendanceStore.ts';
import {PresentToday} from '../models/presentToday.ts';

// force update
@customElement('copy-children-list')
export class CopyChildrenList extends LitElement {
    @state() private _presentChildren: ChildStatus[] = [];
    private _unsubscribe: (() => void) | null = null;

    connectedCallback() {
        super.connectedCallback();
        this._unsubscribe = globalStore.subscribe((state: AttendanceStore) => {
             this._updateList(state.attendance);
        });
        this._updateList(globalStore.getState().attendance);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._unsubscribe) {
            this._unsubscribe();
        }
    }

    private _updateList(list: ChildStatus[]) {
        this._presentChildren = list.filter(c => c.presentToday === PresentToday.Yes);
    }

    copyToClipboard = () => {
        const text = this._presentChildren.map(c => c.name).join(', ');
        navigator.clipboard.writeText(text).then(() => {
             // Optional: Visual feedback
        });
    }

    firstUpdated() {
        console.log('firstUpdated copy-children-list');
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html`
            <div class="flex flex-col gap-4 p-4 items-center justify-center">
                <button @click="${this.copyToClipboard}" class="flex flex-row items-center gap-2 p-2 bg-secondary rounded-lg app-shadow cursor-pointer" style="border: none">
                    <img src="${copyIcon}" class="w-6 h-6" alt="copy" />
                    <span>${Txt.copyContent}</span>
                </button>
                 <div class="text-primary text-center" style="direction: rtl">
                    ${this._presentChildren.map(c => c.name).join(', ')}
                </div>
            </div>
        `
    }
}
