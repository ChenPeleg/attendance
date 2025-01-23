import {SchoolClass} from './schoolClass.ts';
import {SchoolType} from './schoolType.ts';
import {Gender} from './Gender.ts';

export type ChildModel = {
                             id: string; name: string; school: SchoolType; schoolClass: SchoolClass; boyOrGirl: Gender
                             manuallyAdded?: false; onlySchoolBus?: boolean;
                         } | {
                             id: string; name: string; manuallyAdded: true;
                         }
