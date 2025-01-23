export enum ActionType {
    addChild = 'addChild',
    checkInChild = 'checkInChild',
    checkOutChild = 'checkOutChild',
    childAbsentFromDay = 'childAbsentFromDay',
    childPresentInDay = 'childPresentInDay',
}

export type  AppAction = {
    type: ActionType.checkInChild | ActionType.checkOutChild | ActionType.childAbsentFromDay | ActionType.childPresentInDay;
    childId: string;
}  | {
    type: ActionType.addChild;
    childName: string;
}
