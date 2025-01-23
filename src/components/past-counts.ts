import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import {HistoryModel} from '../models/HistoryModel.ts';
import {TimeAndDateService} from '../services/TimeAndDate.service.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';

@customElement('past-counts')
export class PastCounts extends LitElement {

    @property({type: Object}) lastHistory: HistoryModel[] = [];

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
    }

    getHistoryData() {
        const timeAndDateService = servicesProvider.getService(TimeAndDateService);
        return this.lastHistory.map(history => {
            return  timeAndDateService.hoursAndMinutes(history.timestamp);
        })
    }

    getHistoryHtml() {
        return this.getHistoryData().map((time,i) => {
            return html`<span class="flex-row flex gap-3">
                <span class="flex flex-col justify-center items-center h-full">
                <span class=" inline-block bg-red-900 rounded-full min-w-2 min-h-2  h-2 w-2 ${i === 0 ? 'hidden' : ''}">  </span>
                 </span>
                    <span  class="text-xl  font-bold text-red-900"> ${time}</span> 
            </span>`
        })
    }

    render() {
        return html`
            <nav class="w-full  flex-row flex gap-3">
                 ${this.getHistoryHtml() }
            </nav>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'past-counts': PastCounts
    }
}
