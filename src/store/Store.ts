import {StoreFactory} from './factory/StoreFactory.ts';
import {AttendanceStore, DisplayType} from '../models/AttendanceStore.ts';
import {childrenBaseData} from '../data/childrenData.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import {PresentToday} from '../models/presentToday.ts';
import {appReducer} from '../reducer/app-reducer.ts';
import {AppAction} from '../models/AppAction.ts';

const initialState:AttendanceStore = {
    display: DisplayType.Attendance,
    attendance: childrenBaseData.map(child => ({...child, presentToday: PresentToday.Yes, checkedIn: true })) as ChildStatus[],
    count: 0
}

export const globalStore :StoreFactory<AppAction, AttendanceStore, typeof appReducer > = new StoreFactory
({
    reducer: appReducer  ,
    defaultState: initialState
})
