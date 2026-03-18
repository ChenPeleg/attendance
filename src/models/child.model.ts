import {SchoolClass} from './schoolClass.ts';
import {SchoolType} from './schoolType.ts';
import {Gender} from './Gender.ts';
import {RangedId} from './RangedId.ts';

export type ChildModel = {
                             id: RangedId; name: string; school: SchoolType; schoolClass: SchoolClass; boyOrGirl: Gender
                             manuallyAdded?: false; onlySchoolBus?: boolean;
                         } | {
                             id: RangedId; name: string; manuallyAdded: true;
                         }
