
import {AttendanceStore, DisplayType} from '../models/AttendanceStore.ts';
import {childrenBaseData} from '../data/childrenData.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import {PresentToday} from '../models/presentToday.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {StoreService} from '../services/Store.service.ts';

export const initialState:AttendanceStore = {
    display: DisplayType.Attendance,
    attendance: childrenBaseData.map(child => ({...child, presentToday: PresentToday.Yes, checkedIn: false })) as ChildStatus[],
    history: []
}


export const globalStore  = servicesProvider.getService(StoreService).store;
