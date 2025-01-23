import {ChildModel} from '../models/child.model.ts';
import {SchoolType} from '../models/schoolType.ts';
import {SchoolClass} from '../models/schoolClass.ts';
import {Gender} from '../models/Gender.ts';

export const childrenBaseData  :ChildModel [] = [
    {
        id: '1',
        name: 'עמרי ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Second,
        boyOrGirl: Gender.Girl,
    },
    {
        id: '2',
        name: 'מיתר ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Second,
        boyOrGirl: Gender.Girl,
    },
    {
        id: '3',
        name: 'כרם ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Second,
        boyOrGirl: Gender.Girl,
    },
    {
        id: '4',
        name: 'יסמין ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Second,
        boyOrGirl: Gender.Girl,
    },
    {
        id: '5',
        name: 'אביב ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Second,
        boyOrGirl: Gender.Girl,
    }
]
