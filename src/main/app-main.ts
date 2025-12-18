import {html, LitElement} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'
import {globalStyleSheet} from '../styles/global-style-sheet.ts';
import '../layout/app-cockpit.ts'
import {AttendanceStore, ChildrenDisplayType, DisplayType} from '../models/AttendanceStore.ts';
import {globalStore} from '../store/Store.ts';
import '../components/app-child.ts'
import '../ui/check-mark/check-mark.ts'
import '../components/children-count.ts'
import {ActionType} from '../models/AppAction.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import {PresentToday} from '../models/presentToday.ts';
import '../components/past-counts.ts'
import '../components/copy-children-list.ts'
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {HistoryService} from '../services/History.service.ts';
import {SortService} from '../services/SortService.service.ts';
import {SchoolClass} from '../models/schoolClass.ts';

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

    getHistoryHours() {
        const historyService = servicesProvider.getService(HistoryService)
        return historyService.lastAttendanceHours(this.storeState?.history || [])
    }

    render() {
        return html`
            <div class="flex flex-col items-start justify-center   gap-3 pr-4 text-primary">
                <div class="${this.displayType !== DisplayType.DaySettings ? 'contents' : 'hidden'}">
                    <past-counts .lastAttendanceTimes="${this.getHistoryHours()}"></past-counts>
                    <div class="flex flex-row gap-2 items-center">
                        <children-count .onClick="${() => this.completeList()}" .totalChildren=${this.getPresentChildren().length || 0}
                                        .checkedInChildren=${this.getPresentChildren().filter(child => child.checkedIn).length || 0}>
                        </children-count>
                        <copy-children-list .listToCopy="${this.getDisplayedChildren()}"></copy-children-list>
                    </div>
                </div>
                <div class="${this.displayType !== DisplayType.DaySettings ? 'hidden' : ' contents'}">
                    <div class="h-2 w-full">

                    </div>
                </div>
                <div id="children" class=" ${this.getChildrenDisplayClass()}">
                    ${this.getChildren()}
                </div>
                <div class="w-full h-20" id="bottom-scroll-padding">

                </div>
            </div>
        `
    }

    private getChildrenDisplayClass() {
        if (this.displayType !== DisplayType.DaySettings && this.storeState?.childrenDisplayType === ChildrenDisplayType.Grid) {
            return `grid grid-cols-2 gap-2 pl-3`
        }
        return `flex-col flex gap-4 min-w-56`
    }

    private completeList() {

        if (this.getPresentChildren().some(child => !child.checkedIn)) {
            return;
        }
        globalStore.dispatch({
            type: ActionType.completeList,
            payload: null
        });
    };

    private childClicked = (child: ChildStatus) => {
        switch (this.displayType) {
            case DisplayType.Attendance:
            case DisplayType.SchoolBus:
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
            type: child.presentToday === PresentToday.Yes ? ActionType.childAbsentFromDay : ActionType.childPresentInDay,
            payload: child
        })
    }

    private getPresentChildren() {
        const children = this.storeState?.attendance.filter(c => c.presentToday === PresentToday.Yes) || []
        if (this.displayType === DisplayType.SchoolBus) {
            const isOnSchoolBus = (c: ChildStatus) => c.manuallyAdded || c.schoolClass === SchoolClass.First || c.schoolClass === SchoolClass.Second || c.schoolClass === SchoolClass.Third || c.onlySchoolBus === true;
            return children.filter(isOnSchoolBus)
        }
        return children.filter(c=> !(!c.manuallyAdded &&  c.onlySchoolBus === true))
    }

    private getDisplayedChildren() {
        const children = this.displayType !== DisplayType.DaySettings ? this.getPresentChildren() : this.storeState?.attendance || [];
        return servicesProvider.getService(SortService).sortChildren(children);
    }

    private getChildren() {
        const sortedChildren = this.getDisplayedChildren();

        return sortedChildren.map(child => {
            return html`
                <app-child .childrenGridOrList="${this.storeState?.childrenDisplayType}" .child=${child}
                           .onClick="${() => this.childClicked(child)}" .displayType="${this.displayType}"></app-child>
            `
        })
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'app-main': AppMain
    }
}
