import {ActionType, AppAction} from '../models/AppAction.ts';
import {AttendanceStore} from '../models/AttendanceStore.ts';
import {PresentToday} from '../models/presentToday.ts';

export const appReducer = (state: AttendanceStore, action: AppAction): AttendanceStore => {
    switch (action.type) {
        case ActionType.checkInChild:
            return {
                ...state,
                attendance: state.attendance.map(child => child.id === action.childId ? {
                    ...child,
                    checkedIn: true
                } : child)
            }
        case ActionType.checkOutChild:
            return {
                ...state,
                attendance: state.attendance.map(child => child.id === action.childId ? {
                    ...child,
                    checkedIn: false
                } : child)
            }
        case ActionType.childAbsentFromDay:
            return {
                ...state,
                attendance: state.attendance.map(child => child.id === action.childId ? {
                    ...child,
                    presentToday: PresentToday.No
                } : child)
            }
        case ActionType.childPresentInDay:
            return {
                ...state,
                attendance: state.attendance.map(child => child.id === action.childId ? {
                    ...child,
                    presentToday: PresentToday.Yes
                } : child)
            }
        case ActionType.addChild:
            return {
                ...state,
                attendance: [...state.attendance, {
                    id: action.childName,
                    name: action.childName,
                    presentToday: PresentToday.No,
                    checkedIn: false,
                    manuallyAdded: true
                }]
            }


        default:
            return state;
    }
}

