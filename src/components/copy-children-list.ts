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
import retry from   '../assets/svg/retry.svg';

enum CopyFormat {
    Groups = 'groups', Commas = 'commas', Numbers = 'numbers'
}

@customElement('copy-children-list')
export class CopyChildrenList extends LitElement {
    @state() private _presentChildren: ChildStatus[] = [];
    @state() private _showCheckMark: boolean = false;
    @state() private _selectedFormat: CopyFormat = CopyFormat.Numbers;
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

    remixTheList = () => {
        const shuffled = this._presentChildren
            .map(value => ({value, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({value}) => value);
        this._presentChildren = shuffled;
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
            <div class="flex flex-col gap-4 p-4 items-start  justify-center">
                <div class="flex flex-row items-center gap-2 relative">
                    <div class="flex flex-col gap-2">
                        <button @click="${this.copyToClipboard}"
                                class="flex flex-row items-center gap-2 py-2 px-4 bg-secondary rounded-lg app-shadow cursor-pointer"
                                style="border: none">
                            <img src="${copyIcon}" class="w-6 h-6" alt="copy"/>
                            <span>${Txt.copyContent}</span>
                        </button>
                       
                        <div class="relative inline-flex flex-row w-max ">


                            <select
                                    class=" px-4 py-3 w-44 bg-secondary rounded-lg app-shadow cursor-pointer outline-none text-primary font-bold text-sm"
                                    style="border: none; appearance: none;  "
                                    @change="${(e: Event) => this._selectedFormat = (e.target as HTMLSelectElement).value as CopyFormat}"
                            >
                                <option value="${CopyFormat.Numbers}" ?selected="${this._selectedFormat === CopyFormat.Numbers}">מספרים
                                </option>
                                <option value="${CopyFormat.Groups}" ?selected="${this._selectedFormat === CopyFormat.Groups}">כיתות
                                </option>
                                <option value="${CopyFormat.Commas}" ?selected="${this._selectedFormat === CopyFormat.Commas}">פסיקים
                                </option>
                            


                            </select>
                            <div class="pointer-events-none absolute inset-y-0 left-2.5 top-1/3 flex items-center pr-2 text-gray-700">
                             
                                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div class="absolute right-0 top-0">
                                
                            <button @click="${this.copyToClipboard}"
                                    class="flex flex-row items-center gap-2 py-2 px-4 bg-secondary rounded-lg app-shadow cursor-pointer"
                                    style="border: none">
                                <img src=${retry} class="w-5 h-5 absolute right-2 top-3 cursor-pointer" alt="retry"> 
                            </button>
                            </div>
                          
                        </div> 
                    </div>
                    <div class="absolute -left-16 top-1">
                        ${this._showCheckMark ? html`
                            <div class="ml-2">
                                <check-mark-with-animation></check-mark-with-animation>
                            </div>` : null}
                    </div>


                </div>
                <div class="w-full max-w-md    overflow-ellipsis " style="height: 30vh; max-height: 30vh; overflow-y: auto;">
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
