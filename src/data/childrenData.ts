import {ChildModel} from '../models/child.model.ts';
import {SchoolType} from '../models/schoolType.ts';
import {SchoolClass} from '../models/schoolClass.ts';
import {Gender} from '../models/Gender.ts';

export const childrenBaseData  :ChildModel [] = [
    {
        name: 'עמרי ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Second,
        boyOrGirl: Gender.Girl,
    },
    {
        name: 'מיתר ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Second,
        boyOrGirl: Gender.Girl,
    },
    {
        name: 'כרם ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Second,
        boyOrGirl: Gender.Girl,
    },
    {
        name: 'יסמין ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Second,
        boyOrGirl: Gender.Girl,
    },
    {
        name: 'אביב ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Second,
        boyOrGirl: Gender.Girl,
    }
]
