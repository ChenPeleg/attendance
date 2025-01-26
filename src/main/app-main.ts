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
import '../components/past-counts.ts'
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {HistoryService} from '../services/History.service.ts';
import {SortService} from '../services/SortService.service.ts';

@customElement('app-main')
export class AppMain extends LitElement {

    @property({type: String}) childItemType: 'checkIn' | 'presentToday' = 'checkIn';

    @state() storeState: AttendanceStore | null = globalStore.getState();
    private displayType: DisplayType = this.storeState?.display || DisplayType.Attendance;

    private completeList  ()   {

       if ( this.getPresentChildren().some(child => !child.checkedIn) ) {
           return;
       }
        globalStore.dispatch({
            type: ActionType.completeList,
            payload: null});
    };

    firstUpdated() {
        (this.shadowRoot as ShadowRoot).adoptedStyleSheets = [globalStyleSheet];
        globalStore.subscribe((state: AttendanceStore) => {
            this.storeState = state;
            this.displayType = state.display;
            this.requestUpdate();
        })
    }
    getHistoryHours() {
        const historyService = servicesProvider.getService(HistoryService)
        return historyService.lastAttendanceHours(this.storeState?.history || [])
    }

    render() {
        return html`
            <div class="flex flex-col items-start justify-center   gap-3 pr-4 bg-primary text-primary">
             
                <div class="${this.displayType === DisplayType.Attendance ? 'contents' : 'hidden'}">
                    <past-counts .lastAttendanceTimes="${ this.getHistoryHours()}"></past-counts>
                    <children-count .onClick="${()=>this.completeList()}" .totalChildren=${this.getPresentChildren().length || 0}
                                    .checkedInChildren=${this.getPresentChildren().filter(child => child.checkedIn).length || 0}>
                    </children-count>
                </div>
               <div class="${this.displayType === DisplayType.Attendance ? 'hidden' : ' contents'}">
                     <div class="h-2 w-full">
                       
                     </div>
                </div>
                <div id="children" class="flex-col flex gap-4 min-w-56">
                    ${this.getChildren()}
                </div>
                <div class="w-full h-20" id="bottom-scroll-padding">
                    
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
    private getPresentChildren() {
        return this.storeState?.attendance.filter(c=> c.presentToday === PresentToday.Yes) || []
    }
    private getChildren() {
        const children = this.displayType !== DisplayType.DaySettings ? this.getPresentChildren() : this.storeState?.attendance || [];
        const sortedChildren = servicesProvider.getService(SortService).sortChildren(children );

        return sortedChildren.map(child => {
            return html`
                <app-child .child=${child} .onClick="${() => this.childClicked(child)}" .displayType="${this.displayType}"></app-child>
            `
        })
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'app-main': AppMain
    }
}
