import {StoreClass} from './factory/Store.class.ts';
import {AttendanceStore, DisplayType} from '../models/AttendanceStore.ts';
import {childrenBaseData} from '../data/childrenData.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import {PresentToday} from '../models/presentToday.ts';

const initialState:AttendanceStore = {
    display: DisplayType.Attendance,
    attendance: childrenBaseData.map(child => ({...child, presentToday: PresentToday.Yes, checkedIn: false })) as ChildStatus[],
    count: 0
}

export const globalStore = new StoreClass
({
    defaultState: initialState
})
