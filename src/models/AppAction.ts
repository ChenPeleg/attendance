export enum ActionType {
    addChild = 'addChild',
    checkInChild = 'checkInChild',
    checkOutChild = 'checkOutChild',
    childAbsentFromDay = 'childAbsentFromDay',
    childPresentInDay = 'childPresentInDay',
    changeDisplayedTab = 'changeDisplayedTab',
    completeList = 'completeList',
    clearAllData = 'clearAllData',
    changeSort = 'changeSort',
    changeListOrGrid = 'changeListOrGrid'
}

export type  AppAction = {
                             type: ActionType.checkInChild | ActionType.changeListOrGrid | ActionType.checkOutChild | ActionType.childAbsentFromDay | ActionType.childPresentInDay;
                             payload: any;
                         } | {
                             type: ActionType.addChild; payload: any;
                         } | {
                             type: ActionType.changeDisplayedTab; payload: any;
                         } | {
                             type: ActionType.completeList; payload: any;
                         } | {
                             type: ActionType.clearAllData; payload: any;
                         } | {
                                type: ActionType.changeSort; payload: any;
                         }

