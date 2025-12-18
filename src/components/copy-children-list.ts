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
import {SchoolClass} from '../models/schoolClass.ts';

enum CopyFormat {
    Groups = 'groups', Commas = 'commas', Numbers = 'numbers'
}

@customElement('copy-children-list')
export class CopyChildrenList extends LitElement {
    @state() private _presentChildren: ChildStatus[] = [];
    @state() private _showCheckMark: boolean = false;
    @state() private _selectedFormat: CopyFormat = CopyFormat.Groups;
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

    copyToClipboard = () => {
        const text = this._getFormattedText();
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
                    <div>
                        <button @click="${this.copyToClipboard}"
                                class="flex flex-row items-center gap-2 p-2 bg-secondary rounded-lg app-shadow cursor-pointer"
                                style="border: none">
                            <img src="${copyIcon}" class="w-6 h-6" alt="copy"/>
                            <span>${Txt.copyContent}</span>
                        </button>

                        <select
                                class="p-2 bg-secondary rounded-lg app-shadow cursor-pointer outline-none text-primary font-bold"
                                style="border: none"
                                @change="${(e: Event) => this._selectedFormat = (e.target as HTMLSelectElement).value as CopyFormat}"
                        >
                            <option value="${CopyFormat.Groups}" ?selected="${this._selectedFormat === CopyFormat.Groups}">קבוצות</option>
                            <option value="${CopyFormat.Commas}" ?selected="${this._selectedFormat === CopyFormat.Commas}">פסיקים</option>
                            <option value="${CopyFormat.Numbers}" ?selected="${this._selectedFormat === CopyFormat.Numbers}">מספרים</option>
                        </select>

                        <div class="absolute -left-16 top-1">
                            ${this._showCheckMark ? html`
                            <div class="ml-2">
                                <check-mark-with-animation></check-mark-with-animation>
                            </div>` : null}
                        </div>
                    </div>
               


                </div>
                <div class="w-full max-w-md  max-h-[50vh] overflow-ellipsis " style="max-height: 50vh; overflow-y: auto;">
                    <div class="text-primary text-center " style="font-size: 22px; white-space: pre-wrap;">${this._getFormattedText()}</div>
                </div>
            </div>
        `
    }

    private _updateList(list: ChildStatus[]) {
        this._presentChildren = list.filter(c => c.presentToday === PresentToday.Yes);
    }

    private _formatGroups(): string {
        const groups: Record<string, string[]> = {};
        this._presentChildren.forEach(c => {
            let groupName = SchoolClass.Other;
            if ('schoolClass' in c) {
                groupName = c.schoolClass;
            }
            if (!groups[groupName]) {
                groups[groupName] = [];
            }
            groups[groupName].push(c.name);
        });

        const order = [SchoolClass.First, SchoolClass.Second, SchoolClass.Third, SchoolClass.Other];
        const result: string[] = [];

        order.forEach(groupName => {
            if (groups[groupName] && groups[groupName].length > 0) {
                result.push(`${groupName}: ${groups[groupName].join(', ')}`);
            }
        });

        return result.join('\n');
    }

    private _getFormattedText() {
        switch (this._selectedFormat) {
            case CopyFormat.Commas:
                return this._presentChildren.map(c => c.name).join(', ');
            case CopyFormat.Numbers:
                return this._presentChildren.map((c, i) => `${i + 1}. ${c.name}`).join('\n');
            case CopyFormat.Groups:
                return this._formatGroups();
        }
    }
}
