import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {WithGlobalStylesheet} from '../mixins/GlobalStylesheetMixin.ts';


@customElement('past-counts')
export class PastCounts extends WithGlobalStylesheet(LitElement) {

    @property({type: String}) lastAttendanceTimes: string[] = [];


    getHistoryHtml() {
        return this.lastAttendanceTimes.map((time,i) => {

            return html`<span class="flex-row flex gap-3">
                <span class="flex flex-col justify-center items-center h-full">
                <span class=" inline-block  rounded-full min-w-2 min-h-2  h-2 w-2 ${i === 0 ? 'hidden' : ''}">  </span>
                 </span>
                    <span  class="text-xl  font-bold text-secondary "> ${time}</span> 
            </span>`
        })
    }

    render() {
        return html`
            <nav class="w-full  flex-row flex gap-3 pt-2">
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
