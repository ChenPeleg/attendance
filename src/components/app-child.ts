import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {ChildStatus} from '../models/ChildStatus.ts';
import deleteImage from '../assets/svg/delete.svg'
import busIcon from '../assets/svg/bus.svg'
import {ChildrenDisplayType, DisplayType} from '../models/AttendanceStore.ts';
import {Txt} from '../translations/translations.ts';
import {PresentToday} from '../models/presentToday.ts';
import {globalStore} from '../store/Store.ts';
import {ActionType} from '../models/AppAction.ts';
import {AppBaseComponent} from '../mixins/GlobalStylesheetMixin.ts';
import {colorForName, initialOf} from '../utils/childColor.ts';


@customElement('app-child')
export class AppChild extends AppBaseComponent(LitElement) {
    @property({type: DisplayType}) displayType = DisplayType.Attendance;
    @property({type: Object}) child: ChildStatus | null = null;
    @property({type: Object}) childrenGridOrList: ChildrenDisplayType = ChildrenDisplayType.List;
    @property({type: Function}) onClick: () => void = () => {
    };

    deleteChild() {
        globalStore.dispatch({
            type: ActionType.removerAddedChild,
            payload: this.child?.id
        })
    }

    render() {
        const isDaySettings = this.displayType === DisplayType.DaySettings;
        const isPresentToday = this.child?.presentToday === PresentToday.Yes;
        const name = this.child?.name ?? '';
        return html`
            <style>${AppChild.componentCss}</style>
            <div class="flex flex-row items-center justify-center  ">
                <button @click="${this.onClick}"
                        data-testid="${this.getTestId()}"
                        class=" ${this.getButtonStyle()} "
                        style="  border: none;  ">
                    <span class="child-avatar" aria-hidden="true"
                          style="background-color: ${colorForName(name)}">${initialOf(name)}</span>
                    <span class="child-name flex flex-row items-center">
                        ${name} ${this.getChildBusIcon()}
                    </span>
                    <span id="check-mark-container"
                          class="check-circle ${this.child?.checkedIn ? 'checked' : ''} ${isDaySettings ? 'hidden' : ''}">
                        ${this.getCheckMark()}
                    </span>
                    <span id="is-here-today"
                          data-testid="day-set-status"
                          class="day-tag ${isPresentToday ? 'present' : 'absent'} ${isDaySettings ? '' : 'hidden'}">
                        ${isPresentToday ? Txt.present : Txt.absent}
                    </span>
                </button>
                ${this.getDeleteButton()}
            </div>
        `
    }

    private static componentCss = `
        .child-row {
            background-color: var(--secondary-background-color);
            box-shadow: 0 4px 0 var(--card-shadow-color);
            border-radius: 22px;
            transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .child-row.checked {
            background-color: var(--bg-success-color);
            box-shadow: 0 4px 0 var(--success-shadow-color);
        }
        .child-row.absent-today {
            background-color: color-mix(in srgb, var(--secondary-background-color) 55%, transparent);
            box-shadow: 0 4px 0 transparent;
        }
        .child-avatar {
            flex: none;
            width: 2.6rem;
            height: 2.6rem;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: 1.25rem;
            font-weight: 700;
            transition: filter 0.2s, opacity 0.2s;
        }
        .grid-item .child-avatar {
            width: 2.1rem;
            height: 2.1rem;
            font-size: 1.05rem;
        }
        .absent-today .child-avatar {
            filter: grayscale(1);
            opacity: 0.45;
        }
        .child-name {
            text-align: start;
            line-height: 1.15;
        }
        .check-circle {
            flex: none;
            margin-inline-start: auto;
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 9999px;
            border: 3px dashed var(--check-ring-color);
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
            --check-mark-color: #ffffff;
        }
        .grid-item .check-circle {
            width: 1.9rem;
            height: 1.9rem;
            font-size: 19px;
        }
        .check-circle.checked {
            border: none;
            background-color: var(--success-strong-color);
        }
        .check-circle.hidden, .day-tag.hidden {
            display: none;
        }
        .check-circle check-mark {
            transform: translate(-0.05em, -0.1em);
        }
        .day-tag {
            flex: none;
            margin-inline-start: auto;
            font-size: 0.95rem;
            font-weight: 500;
            padding: 0.2rem 0.7rem;
            border-radius: 12px;
        }
        .day-tag.present {
            background-color: var(--bg-success-color);
            color: var(--success-text-color);
        }
        .day-tag.absent {
            background-color: var(--accent-background-color);
            color: var(--faded-text-color);
        }
        .delete-child-button {
            border: none;
            background-color: var(--danger-color);
            box-shadow: 0 3px 0 var(--danger-shadow-color);
        }
        .delete-child-button img {
            filter: brightness(0) invert(1);
        }
    `;

    private getChildBusIcon() {
        if (this.displayType !== DisplayType.DaySettings) {
            return ''
        }
        if (!this.child?.manuallyAdded && this.child?.onlySchoolBus) {
            const presentToday = this.child?.presentToday === PresentToday.Yes
            return html`
                <div class="${presentToday ? '' : 'opacity-20'} h-full flex flex-col justify-center items-center px-2 pt-1">
                    <img src="${busIcon}" alt="bus" class="app-icon w-6 h-6"/></div>`
        }
        return ''
    }

    private getDeleteButton() {
        if (!this.child?.manuallyAdded || this.displayType !== DisplayType.DaySettings) {
            return ''
        }
        return html`
            <div class="relative ">
                <button @click="${this.deleteChild}"
                        data-testid="remove-child_${this.child?.id}"
                        class="delete-child-button cursor-pointer absolute -left-12 -top-5 mt-0.5 rounded-full h-10 w-10 flex flex-row justify-center items-center">
                    <img src="${deleteImage}" alt="delete" class="app-icon w-6 h-6"> </img>
                </button>
            </div>
        `
    }

    private getTestId() {
        let displayType = 'attend';
        if (this.displayType === DisplayType.DaySettings) {
            displayType = 'day-set';
        } else if (this.displayType === DisplayType.SchoolBus || this.displayType === DisplayType.Attendance) {
            displayType = 'attend';
        }
        return `child_${this.child?.id}_${displayType}`
    }

    private getButtonStyle() {
        const isDaySettings = this.displayType === DisplayType.DaySettings;
        const isAbsentToday = this.child?.presentToday === PresentToday.No;
        return `child-row text-primary flex flex-row cursor-pointer
        ${this.childrenGridOrList === ChildrenDisplayType.Grid ? ' grid-item px-2 gap-2' : ' px-3 gap-4'}
        items-center h-14 w-full relative
        ${!isDaySettings && this.child?.checkedIn ? ' checked ' : ' '}
        ${isAbsentToday ? ' text-faded ' : ' '} ${isDaySettings && isAbsentToday ? ' absent-today ' : ' '}`
    }

    private getCheckMark() {
        return this.child?.checkedIn ? html`
            <check-mark></check-mark>` : html``
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-child': AppChild
    }
}
