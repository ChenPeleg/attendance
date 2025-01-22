import {ChildStatus} from './ChildStatus.ts';

export enum DisplayType {
    Attendance = 'Attendance',
    SchoolBus = 'SchoolBus',
    DaySettings = 'DaySettings'
}

export interface AttendanceStore {
    display: DisplayType;
    attendance: ChildStatus[];
    count: number;
}
