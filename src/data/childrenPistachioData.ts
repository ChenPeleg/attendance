import {ChildModel} from '../models/child.model.ts';
import {SchoolType} from '../models/schoolType.ts';
import {SchoolClass} from '../models/schoolClass.ts';
import {Gender} from '../models/Gender.ts';

export const childrenBaseData: ChildModel [] = [{
    id: '1',
    name: 'עמרי ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.First,
    boyOrGirl: Gender.Boy,
}, {
    id: '2',
    name: 'מיתר ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.First,
    boyOrGirl: Gender.Girl,
}, {
    id: '3',
    name: 'כרם ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.First,
    boyOrGirl: Gender.Girl,
}, {
    id: '4',
    name: 'יסמין ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.First,
    boyOrGirl: Gender.Girl,
}, {
    id: '5',
    name: 'ניר ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.First,
    boyOrGirl: Gender.Girl,
}, {
    id: '6',
    name: 'יונתן',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Second,
    boyOrGirl: Gender.Boy,
}, {
    id: '7',
    name: 'אסף ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Second,
    boyOrGirl: Gender.Boy,
}, {
    id: '8',
    name: 'עפרי ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Second,
    boyOrGirl: Gender.Girl,
}, {
    id: '9',
    name: 'נעמי',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Second,
    boyOrGirl: Gender.Girl,
}, {
    id: '10',
    name: 'אביב ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Second,
    boyOrGirl: Gender.Girl,
}, {
    id: '11',
    name: 'נמרוד ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Third,
    boyOrGirl: Gender.Boy,
}, {
    id: '12',
    name: 'אשכר ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Third,
    boyOrGirl: Gender.Girl,
}, {
    id: '13',
    name: 'רוני ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Third,
    boyOrGirl: Gender.Boy,
},]
