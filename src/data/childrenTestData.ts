import {ChildModel} from '../models/child.model.ts';
import {SchoolType} from '../models/schoolType.ts';
import {SchoolClass} from '../models/schoolClass.ts';
import {Gender} from '../models/Gender.ts';

export const childrenTestData  :ChildModel [] = [
    {
        id: '1',
        name: 'עמרי',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.First,
        boyOrGirl: Gender.Boy,
    },
    {
        id: '2',
        name: 'מיתר ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.First,
        boyOrGirl: Gender.Girl,
    },

    {
        id: '3',
        name: 'אסף ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Second,
        boyOrGirl: Gender.Boy,
    },
    {
        id: '4',
        name: 'אביב ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Second,
        boyOrGirl: Gender.Girl,
    },
    {
        id: '5',
        name: 'נמרוד ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Third,
        boyOrGirl: Gender.Boy,
    },
    {
        id: '6',
        name: 'אשכר ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Third,
        boyOrGirl: Gender.Girl,
    },

]
