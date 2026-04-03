import {AbstractBaseService} from './provider/AbstractBaseService.ts';
import {ServicesResolver} from './provider/ServiceResolverClass.ts';
import {ChildStatus} from '../models/ChildStatus.ts';
import {PresentToday} from '../models/presentToday.ts';
import {SchoolClass} from '../models/schoolClass.ts';
import {DisplayType} from '../models/AttendanceStore.ts';

/**
 * Service responsible for filtering children based on various criteria.
 * Provides methods to filter children by presence, school bus, and manual additions.
 */
export class ChildrenFilterService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }

    /**
     * Filters children who are present today.
     * @param children - Array of all children
     * @returns Array of present children
     */
    public filterPresentChildren(children: ChildStatus[]): ChildStatus[] {
        return children.filter(c => c.presentToday === PresentToday.Yes);
    }

    /**
     * Filters children based on school bus criteria.
     * Includes manually added children and children in grades 1-3, or children marked as school bus only.
     * @param children - Array of children
     * @returns Array of school bus children
     */
    public filterSchoolBusChildren(children: ChildStatus[]): ChildStatus[] {
        const isOnSchoolBus = (c: ChildStatus) =>
            c.manuallyAdded ||
            c.schoolClass === SchoolClass.First ||
            c.schoolClass === SchoolClass.Second ||
            c.schoolClass === SchoolClass.Third ||
            c.onlySchoolBus === true;
        return children.filter(isOnSchoolBus);
    }

    /**
     * Filters children for regular attendance (excludes school bus only children).
     * @param children - Array of children
     * @returns Array of children for regular attendance
     */
    public filterRegularAttendanceChildren(children: ChildStatus[]): ChildStatus[] {
        return children.filter(c => !(!c.manuallyAdded && c.onlySchoolBus === true));
    }

    /**
     * Applies filtering based on display type.
     * @param children - Array of all children
     * @param displayType - Type of display (Attendance, SchoolBus, DaySettings)
     * @returns Filtered array of children
     */
    public applyFilters(children: ChildStatus[], displayType: DisplayType): ChildStatus[] {
        // For day settings, return all children
        if (displayType === DisplayType.DaySettings) {
            return children;
        }

        // Filter present children first
        const presentChildren = this.filterPresentChildren(children);

        // Apply additional filtering based on display type
        if (displayType === DisplayType.SchoolBus) {
            return this.filterSchoolBusChildren(presentChildren);
        }

        // For regular attendance, exclude school bus only children
        return this.filterRegularAttendanceChildren(presentChildren);
    }
}
