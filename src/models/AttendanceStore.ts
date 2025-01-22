
export enum DisplayType {
    Attendance = 'Attendance',
    SchoolBus = 'SchoolBus',
    DaySettings = 'DaySettings'
}

export interface AttendanceStore {
    display: DisplayType;


}
