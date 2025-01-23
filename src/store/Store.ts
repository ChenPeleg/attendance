import {StoreFactory} from './factory/StoreFactory.ts';
import {AttendanceStore, DisplayType} from '../models/AttendanceStore.ts';
import {childrenBaseData} from '../data/childrenData.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import {PresentToday} from '../models/presentToday.ts';
import {appReducer} from '../reducer/app-reducer.ts';
import {AppAction} from '../models/AppAction.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {LocalStorageService} from '../services/LocalStorage.service.ts';


export const initialState:AttendanceStore = {
    display: DisplayType.Attendance,
    attendance: childrenBaseData.map(child => ({...child, presentToday: PresentToday.Yes, checkedIn: true })) as ChildStatus[],
    history: []
}

const stateFromLocalStorage = servicesProvider.
getService(LocalStorageService).
getObjectOrNull(LocalStorageService.STORE_SETTINGS) as AttendanceStore | null;

export const globalStore :StoreFactory<AppAction, AttendanceStore, typeof appReducer > = new StoreFactory
({
    reducer: appReducer  ,
    defaultState: stateFromLocalStorage || initialState
})

globalStore.subscribe((state: AttendanceStore) => {
    servicesProvider.getService(LocalStorageService).setObject(LocalStorageService.STORE_SETTINGS, state);
})
