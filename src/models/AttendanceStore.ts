import {ChildStatus} from './ChildStatus.ts';
import {HistoryModel} from './HistoryModel.ts';

export enum DisplayType {
    Attendance = 'Attendance',
    SchoolBus = 'SchoolBus',
    DaySettings = 'DaySettings'
}

export interface AttendanceStore {
    display: DisplayType;
    attendance: ChildStatus[];
    history: HistoryModel[];
}
