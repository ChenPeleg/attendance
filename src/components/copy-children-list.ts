import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import copyIcon from '../assets/svg/copy-content.svg'
import {Txt} from '../translations/translations.ts';
import {ChildStatus} from '../models/ChildStatus.ts';

// force update
@customElement('copy-children-list')
export class CopyChildrenList extends LitElement {
    @property({type: Array}) listToCopy: ChildStatus[] = [];

    copyToClipboard() {
        const text = this.listToCopy.map(c => c.name).join('\n');
        navigator.clipboard.writeText(text).then(() => {
             // Optional: Visual feedback
        });
    }

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    render() {
        return html`
            <button @click="${this.copyToClipboard}" class="flex flex-row items-center gap-2 p-2 bg-secondary rounded-lg app-shadow cursor-pointer" style="border: none">
                <img src="${copyIcon}" class="w-6 h-6" alt="copy" />
                <span>${Txt.copyContent}</span>
            </button>
        `
    }
}
