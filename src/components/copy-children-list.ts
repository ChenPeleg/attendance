import {html, LitElement} from 'lit'
import {customElement, state} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import copyIcon from '../assets/svg/copy-content.svg'
import {Txt} from '../translations/translations.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import {globalStore} from '../store/Store.ts';
import {AttendanceStore} from '../models/AttendanceStore.ts';
import {PresentToday} from '../models/presentToday.ts';
import '../ui/check-mark-with-animation/check-mark-with-animation.ts';


@customElement('copy-children-list')
export class CopyChildrenList extends LitElement {
    @state() private _presentChildren: ChildStatus[] = [];
    @state() private _showCheckMark: boolean = false;
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
            this._showCheckMark = true;
            setTimeout(() => {
                this._showCheckMark = false;
            }, 2000);
        });
    }

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html`
            <div class="flex flex-col gap-4 p-4 items-center justify-center">
                <div class="flex flex-row items-center gap-2 relative">
                    <button @click="${this.copyToClipboard}" class="flex flex-row items-center gap-2 p-2 bg-secondary rounded-lg app-shadow cursor-pointer" style="border: none">
                        <img src="${copyIcon}" class="w-6 h-6" alt="copy" />
                        <span>${Txt.copyContent}</span>
                    </button>
                    <div class="absolute -left-16 top-1">
                    ${this._showCheckMark ? html`<div class="ml-2"><check-mark-with-animation></check-mark-with-animation></div>` : null}
                    </div>
                   
                   
                </div>
                 <div class="text-primary text-center" style="direction: rtl">
                    ${this._presentChildren.map(c => c.name).join(', ')}
                </div>
            </div>
        `
    }
}
