import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import {StoreService} from './Store.service.ts';
import {SortOrder, SortType} from '../models/SortType.ts';
import {SchoolType} from '../models/schoolType.ts';
import {SchoolClass} from '../models/schoolClass.ts';
import {Gender} from '../models/Gender.ts';


export class SortService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }

    sortChildren(children: ChildStatus[]): ChildStatus[] {
        const sort = this.getSortOrder();
        const sortType = sort.sortType;
        const sortOrder = sort.sortOrder;
        const childrenFullData: {
            id: string; name: string; school: SchoolType; schoolClass: SchoolClass; boyOrGirl: Gender
            manuallyAdded: boolean; onlySchoolBus: boolean;
        }[] = children.map(child => {
            const schoolClass = 'schoolClass' in child ? child.schoolClass : SchoolClass.Other;
            const school = 'school' in child ? child.school : SchoolType.Nitzanim;
            const boyOrGirl = 'boyOrGirl' in child ? child.boyOrGirl : Gender.Boy

            return {
                ...child,
                school,
                boyOrGirl,
                schoolClass: schoolClass,
                onlySchoolBus: !child.manuallyAdded ? !!child.onlySchoolBus : false,
                manuallyAdded: child.manuallyAdded || false
            }
        });


        // @ts-ignore
        return childrenFullData.sort((a, b) => {
            if (sortType === SortType.Class) {
                return sortOrder === SortOrder.Ascending ? (a.schoolClass || '').localeCompare(b.schoolClass) : b.schoolClass.localeCompare(a.schoolClass);
            }
            if (sortType === SortType.Name) {
                return sortOrder === SortOrder.Ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
            }
            if (sortType === SortType.Gender) {
                return sortOrder === SortOrder.Descending ? a.boyOrGirl.localeCompare(b.boyOrGirl) : b.boyOrGirl.localeCompare(a.boyOrGirl);
            }
        })


    }

    private getSortOrder() {
        const store = this.servicesResolver.getService(StoreService);
        const state = store.store.getState();
        return {
            sortType: state.sortType,
            sortOrder: state.sortOrder
        }

    }
}
