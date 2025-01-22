import {SchoolClass} from './schoolClass.ts';
import {SchoolType} from './schoolType.ts';
import {Gender} from './Gender.ts';

export type ChildModel = {
                             name: string; school: SchoolType;
                             schoolClass: SchoolClass;
                             boyOrGirl: Gender
                             manuallyAdded?: false;
                             onlySchoolBus?: boolean;
                         } | {
                             name: string; manuallyAdded: true;
                         }
