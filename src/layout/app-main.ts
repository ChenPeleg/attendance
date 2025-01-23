import {html, LitElement} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import '../layout/app-cockpit.ts'
import {AttendanceStore} from '../models/AttendanceStore.ts';
import {globalStore} from '../store/Store.ts';
import '../components/app-child.ts'
import '../ui/check-mark.ts'

@customElement('app-main')
export class AppMain extends LitElement {

    @property({type: String})
    childItemType: 'checkIn' | 'presentToday' = 'checkIn';

    @state()
    storeState : AttendanceStore | null =  globalStore.getState() ;
    private childClicked = (child: any) => {
      console.log(child)
    };

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
        globalStore.subscribe((state:AttendanceStore) => {
            this.storeState = state;
            this.requestUpdate();
        })
    }
    private getChildren () {
        return this.storeState?.attendance.map(child => {
            return html` 
                <app-child .child=${child} .onClick="${()=>this.childClicked (child)}" ></app-child>
            `
        })
    }


    render() {
        return html`
            <div class="flex flex-col items-start justify-center bg-amber-100 gap-3 pr-4">
            ff
            <check-mark></check-mark>
                <app-cockpit></app-cockpit> 
                <div id="children" class="flex-col flex gap-2 w-32">
                    ${this.getChildren()}
                </div>
            </div>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'app-main': AppMain
    }
}
