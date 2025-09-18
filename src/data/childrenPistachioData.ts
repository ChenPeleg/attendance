import {ChildModel} from '../models/child.model.ts';
import {SchoolType} from '../models/schoolType.ts';
import {SchoolClass} from '../models/schoolClass.ts';
import {Gender} from '../models/Gender.ts';

export const childrenBaseData: ChildModel [] = [
    {
        id: '1',
        name: 'אפיק ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.First,
        boyOrGirl: Gender.Boy,
    }, {
        id: '2',
        name: 'רותם ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.First,
        boyOrGirl: Gender.Boy,
    }, {
        id: '3',
        name: 'מעיין ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.First,
        boyOrGirl: Gender.Boy,

    },
    {
        id: '4',
        name: 'דגן ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.First,
        boyOrGirl: Gender.Boy,
    }, {
        id: '5',
        name: 'שקד',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.First,
        boyOrGirl: Gender.Girl,
    }, {
        id: '6',
        name: 'דור ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.First,
        boyOrGirl: Gender.Girl,

    },{
        id: '7',
        name: 'אדווה ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.First,
        boyOrGirl: Gender.Girl,
    }, {
        id: '8',
        name: 'עמיה ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.First,
        boyOrGirl: Gender.Girl,

    },
    {
    id: '11',
    name: 'עמרי ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Second,
    boyOrGirl: Gender.Boy,
}, {
    id: '12',
    name: 'מיתר ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Second,
    boyOrGirl: Gender.Girl,
}, {
    id: '13',
    name: 'כרם ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Second,
    boyOrGirl: Gender.Girl,
}, {
    id: '14',
    name: 'יסמין ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Second,
    boyOrGirl: Gender.Girl,
}, {
    id: '15',
    name: 'ניר ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Second,
    boyOrGirl: Gender.Girl,
}, {
    id: '16',
    name: 'יונתן',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Third,
    boyOrGirl: Gender.Boy,
}, {
    id: '17',
    name: 'אסף ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Third,
    boyOrGirl: Gender.Boy,
}, {
    id: '18',
    name: 'עפרי ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Third,
    boyOrGirl: Gender.Girl,
}, {
    id: '19',
    name: 'נעמי',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Third,
    boyOrGirl: Gender.Girl,
}, {
    id: '110',
    name: 'אביב ',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Third,
    boyOrGirl: Gender.Girl,
},  {
    id: '114',
    name: 'אורי',
    school: SchoolType.Nitzanim,
    schoolClass: SchoolClass.Other,
    onlySchoolBus: true,
    boyOrGirl: Gender.Boy,

}]
