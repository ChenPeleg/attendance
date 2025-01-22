import {SchoolClass} from './schoolClass.ts';
import {SchoolType} from './schoolType.ts';

export interface ChildModel {
    firstName: string;
    lastName: string;
    properties : {
        school: SchoolType;
        schoolClass: SchoolClass;
    }
}
