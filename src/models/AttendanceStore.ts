import {ChildStatus} from './ChildStatus.ts';
import {HistoryModel} from './HistoryModel.ts';
import {SortOrder, SortType} from './SortType.ts';

export enum DisplayType {
    Attendance = 'Attendance',
    SchoolBus = 'SchoolBus',
    DaySettings = 'DaySettings'
}

export enum ChildrenDisplayType {
    List = 'List',
    Grid = 'Grid'
}

export interface AttendanceStore {
    display: DisplayType;
    attendance: ChildStatus[];
    history: HistoryModel[];
    sortType: SortType;
    sortOrder: SortOrder;
    childrenDisplayType: ChildrenDisplayType;

}
