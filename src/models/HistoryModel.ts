import {ChildStatus} from './ChildStatus.ts';

export interface HistoryModel {
    timestamp: number;
    attendance: ChildStatus[];
}
