import {SchoolClass} from './schoolClass.ts';
import {SchoolType} from './schoolType.ts';

export type ChildModel = {
                             name: string; school: SchoolType; schoolClass: SchoolClass; onlySchoolBus: boolean; manuallyAdded: false;
                         } | {
                             name: string; manuallyAdded: true;
                         }
