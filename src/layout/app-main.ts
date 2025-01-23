import {html, LitElement} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import '../layout/app-cockpit.ts'
import {AttendanceStore, DisplayType} from '../models/AttendanceStore.ts';
import {globalStore} from '../store/Store.ts';
import '../components/app-child.ts'
import '../ui/check-mark/check-mark.ts'
import '../components/children-count.ts'
import {ActionType} from '../models/AppAction.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import {PresentToday} from '../models/presentToday.ts';

@customElement('app-main')
export class AppMain extends LitElement {

    @property({type: String}) childItemType: 'checkIn' | 'presentToday' = 'checkIn';

    @state() storeState: AttendanceStore | null = globalStore.getState();
    private displayType: DisplayType = this.storeState?.display || DisplayType.Attendance;


    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
        globalStore.subscribe((state: AttendanceStore) => {
            this.storeState = state;
            this.displayType = state.display;
            this.requestUpdate();
        })
    }

    render() {
        return html`
            <div class="flex flex-col items-start justify-center bg-amber-100 gap-3 pr-4">
                <app-cockpit></app-cockpit>
                <children-count .totalChildren=${this.storeState?.attendance.length || 0}
                                .checkedInChildren=${this.storeState?.attendance.filter(child => child.checkedIn).length || 0}>
                </children-count>
                <div id="children" class="flex-col flex gap-4 min-w-56">
                    ${this.getChildren()}
                </div>
            </div>
        `
    }

    private childClicked = (child: ChildStatus) => {
        switch (this.displayType) {
            case DisplayType.Attendance:
                this.checkInChild(child);
                break;
            case DisplayType.DaySettings:
                this.presentTodayChild(child);
                break;
            default:
                break;
        }

    };

    private checkInChild(child: ChildStatus) {

        globalStore.dispatch({
            type: child.checkedIn ? ActionType.checkOutChild : ActionType.checkInChild,
            payload: child
        });
    }

    private presentTodayChild(child: ChildStatus) {
        globalStore.dispatch({
            type: child.presentToday === PresentToday.Yes ? ActionType.childAbsentFromDay :
                ActionType.childPresentInDay,
            payload: child
        })
    }
    private getChildren() {
        return this.storeState?.attendance.map(child => {
            return html`
                <app-child .child=${child} .onClick="${() => this.childClicked(child)}"></app-child>
            `
        })
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'app-main': AppMain
    }
}
