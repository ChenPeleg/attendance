export enum ActionType {
    addChild = 'addChild',
    checkInChild = 'checkInChild',
    checkOutChild = 'checkOutChild',
    childAbsentFromDay = 'childAbsentFromDay',
    childPresentInDay = 'childPresentInDay',
    changeDisplay = 'changeDisplay',
    completeList = 'completeList',
    clearAllData = 'clearAllData',
}

export type  AppAction = {
                             type: ActionType.checkInChild | ActionType.checkOutChild | ActionType.childAbsentFromDay | ActionType.childPresentInDay;
                             payload: any;
                         } | {
                             type: ActionType.addChild; payload: any;
                         } | {
                             type: ActionType.changeDisplay; payload: any;
                         } | {
                             type: ActionType.completeList; payload: any;
                         } | {
                             type: ActionType.clearAllData; payload: any;
                         }

