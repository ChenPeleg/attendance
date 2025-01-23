import {ActionType, AppAction} from '../models/AppAction.ts';
import {AttendanceStore} from '../models/AttendanceStore.ts';
import {PresentToday} from '../models/presentToday.ts';
import {StoreReducer} from '../store/factory/StoreFactory.ts';
import {HistoryModel} from '../models/HistoryModel.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {TimeAndDateService} from '../services/TimeAndDate.service.ts';
import {initialState} from '../store/Store.ts';

export const appReducer:StoreReducer<AttendanceStore, AppAction> = (state: AttendanceStore, action: AppAction): AttendanceStore => {

    switch (action.type) {

        case ActionType.checkInChild:
            return {
                ...state,
                attendance: state.attendance.map(child => child.id === action.payload.id ? {
                    ...child,
                    checkedIn: true
                } : child)
            }
        case ActionType.checkOutChild:
            return {
                ...state,
                attendance: state.attendance.map(child => child.id === action.payload.id ? {
                    ...child,
                    checkedIn: false
                } : child)
            }
        case ActionType.childAbsentFromDay:
            return {
                ...state,
                attendance: state.attendance.map(child => child.id === action.payload.id ? {
                    ...child,
                    presentToday: PresentToday.No
                } : child)
            }
        case ActionType.childPresentInDay:
            console.log(action)
            return {
                ...state,
                attendance: state.attendance.map(child => child.id === action.payload.id ? {
                    ...child,
                    presentToday: PresentToday.Yes
                } : child)
            }
        case ActionType.addChild:
            return {
                ...state,
                attendance: [...state.attendance, {
                    id: action.payload.id,
                    name: action.payload,
                    presentToday: PresentToday.No,
                    checkedIn: false,
                    manuallyAdded: true
                }]
            }

        case ActionType.changeDisplay:
            return {
                ...state,
                display: action.payload
            }
        case ActionType.completeList:
            const newHistory : HistoryModel = {
                timestamp:  servicesProvider.getService(TimeAndDateService).createTimestamp(),
                attendance: state.attendance.filter(child => child.checkedIn)
            }
            return {
                ...state,
                history: [...state.history, newHistory],
                attendance: state.attendance.map(child => ({
                    ...child,
                    checkedIn: false
                }))
            }
        case ActionType.clearAllData:
            return {
                ...initialState
            }


        default:
            return state;
    }
}

