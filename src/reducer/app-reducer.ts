import {ActionType, AppAction} from '../models/AppAction.ts';
import {AttendanceStore} from '../models/AttendanceStore.ts';
import {PresentToday} from '../models/presentToday.ts';
import {StoreReducer} from '../store/factory/StoreFactory.ts';
import {HistoryModel} from '../models/HistoryModel.ts';
import {servicesProvider} from '../services/provider/ServicesProvider.ts';
import {TimeAndDateService} from '../services/TimeAndDate.service.ts';

import {SortOrder} from '../models/SortType.ts';
import {StoreService} from '../services/Store.service.ts';

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

            return {
                ...state,
                attendance: state.attendance.map(child => child.id === action.payload.id ? {
                    ...child,
                    presentToday: PresentToday.Yes
                } : child)
            }
        case ActionType.addChild:
            let childName = action.payload;
            if(state.attendance.find(child => child.name === childName)){
                childName = childName + ' (2)'
            }
            return {
                ...state,
                attendance: [...state.attendance, {
                    id: childName,
                    name: childName,
                    presentToday: PresentToday.Yes,
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
            const initialStoreState = servicesProvider.getService(StoreService).initialState;
            return {
                ...initialStoreState
            }

        case ActionType.changeSort:
            let sortOrder
            if (state.sortType === action.payload.sortType
            ) {
               sortOrder =   state.sortOrder === SortOrder.Ascending ? SortOrder.Descending : SortOrder.Ascending;

            } else  {
                sortOrder = SortOrder.Ascending;
            }


            return {
                ...state,
                sortType: action.payload.sortType,
                sortOrder: sortOrder
            }
        default:
            return state;
    }
}

