import {ChildModel} from '../models/child.model.ts';
import {SchoolType} from '../models/schoolType.ts';
import {SchoolClass} from '../models/schoolClass.ts';
import {Gender} from '../models/Gender.ts';

export const childrenBaseData: ChildModel [] = [
    {
        id: '1',
        name: 'נמרוד ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Other,
        boyOrGirl: Gender.Boy,
    }, {
        id: '2',
        name: 'אשכר ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Other,
        boyOrGirl: Gender.Girl,
    }, {
        id: '3',
        name: 'רוני ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Other,
        boyOrGirl: Gender.Boy,

    },
    {
        id: '4',
        name: 'נמרוד ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Other,
        boyOrGirl: Gender.Boy,
    }, {
        id: '5',
        name: 'אשכר ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Other,
        boyOrGirl: Gender.Girl,
    }, {
        id: '6',
        name: 'רוני ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Other,
        boyOrGirl: Gender.Boy,

    },{
        id: '7',
        name: 'אשכר ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Other,
        boyOrGirl: Gender.Girl,
    }, {
        id: '8',
        name: 'רוני ',
        school: SchoolType.Nitzanim,
        schoolClass: SchoolClass.Other,
        boyOrGirl: Gender.Boy,

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
