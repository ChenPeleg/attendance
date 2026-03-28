import { AbstractBaseService } from './provider/AbstractBaseService.ts';
import { ServicesResolver } from './provider/ServiceResolverClass.ts';
import { ChildStatus } from '../models/ChildStatus.ts';
import { SchoolClass } from '../models/schoolClass.ts';

/**
 * Format options for children list output.
 */
export enum ChildrenListFormat {
    /** Numbered list format: "1. Name\n2. Name" */
    Numbers = 'numbers',
    /** Comma-separated format: "Name, Name, Name" */
    Commas = 'commas',
    /** Grouped by school class format */
    Groups = 'groups',
    /** Split into 2 groups */
    TwoGroups = 'two-groups',
    /** Split into 3 groups */
    ThreeGroups = 'three-groups'
}

/**
 * Service for formatting children lists into various text output formats.
 * Supports multiple output styles including numbered lists, comma-separated,
 * grouped by class, and split into N groups.
 */
export class ChildrenListFormatterService extends AbstractBaseService {
    constructor(provider: ServicesResolver) {
        super(provider);
    }

    /**
     * Formats children as a numbered list.
     *
     * @param children Array of children to format
     * @returns Formatted string: "1. Name\n2. Name\n..."
     *
     * @example
     * ```typescript
     * formatAsNumberedList([{name: 'Alice'}, {name: 'Bob'}])
     * // Returns: "1. Alice\n2. Bob"
     * ```
     */
    formatAsNumberedList(children: ChildStatus[]): string {
        return children.map((child, index) => `${index + 1}. ${child.name}`).join('\n');
    }

    /**
     * Formats children as a comma-separated list.
     *
     * @param children Array of children to format
     * @returns Formatted string: "Name, Name, Name"
     *
     * @example
     * ```typescript
     * formatAsCommaList([{name: 'Alice'}, {name: 'Bob'}])
     * // Returns: "Alice, Bob"
     * ```
     */
    formatAsCommaList(children: ChildStatus[]): string {
        return children.map(child => child.name).join(', ');
    }

    /**
     * Formats children grouped by their school class.
     * Groups are ordered: First, Second, Third, Other.
     *
     * @param children Array of children to format
     * @returns Formatted string with class groups
     *
     * @example
     * ```typescript
     * formatByClass([{name: 'Alice', schoolClass: 'כיתה א'}])
     * // Returns: "כיתה א: Alice"
     * ```
     */
    formatByClass(children: ChildStatus[]): string {
        const groups: Record<string, string[]> = {};

        children.forEach(child => {
            let groupName = SchoolClass.Other;
            if ('schoolClass' in child) {
                groupName = child.schoolClass;
            }
            if (!groups[groupName]) {
                groups[groupName] = [];
            }
            groups[groupName].push(child.name);
        });

        const order = [SchoolClass.First, SchoolClass.Second, SchoolClass.Third, SchoolClass.Other];
        const result: string[] = [];

        order.forEach(groupName => {
            if (groups[groupName] && groups[groupName].length > 0) {
                result.push(`${groupName}: ${groups[groupName].join(', ')}`);
            }
        });

        return result.join('\n');
    }

    /**
     * Splits children into N groups and formats as numbered lists.
     * Each group is labeled "--- קבוצה X ---" and contains a numbered list.
     *
     * @param children Array of children to format
     * @param numberOfGroups Number of groups to split into (typically 2 or 3)
     * @returns Formatted string with grouped numbered lists
     *
     * @example
     * ```typescript
     * formatSplitGroups([{name: 'A'}, {name: 'B'}, {name: 'C'}, {name: 'D'}], 2)
     * // Returns:
     * // "--- קבוצה 1 ---
     * // 1. A
     * // 2. B
     * //
     * // --- קבוצה 2 ---
     * // 1. C
     * // 2. D"
     * ```
     */
    formatSplitGroups(children: ChildStatus[], numberOfGroups: number): string {
        const result: string[] = [];
        const chunkSize = Math.ceil(children.length / numberOfGroups);

        for (let i = 0; i < numberOfGroups; i++) {
            const chunk = children.slice(i * chunkSize, (i + 1) * chunkSize);
            if (chunk.length === 0) continue;

            result.push(`--- קבוצה ${i + 1} ---`);
            result.push(chunk.map((child, idx) => `${idx + 1}. ${child.name}`).join('\n'));
            if (i < numberOfGroups - 1) {
                result.push('');
            }
        }
        return result.join('\n');
    }

    /**
     * Formats children according to the specified format type.
     *
     * @param children Array of children to format
     * @param format The desired output format
     * @returns Formatted string
     *
     * @example
     * ```typescript
     * format([{name: 'Alice'}], ChildrenListFormat.Numbers)
     * // Returns: "1. Alice"
     * ```
     */
    format(children: ChildStatus[], format: ChildrenListFormat): string {
        switch (format) {
            case ChildrenListFormat.Commas:
                return this.formatAsCommaList(children);
            case ChildrenListFormat.Numbers:
                return this.formatAsNumberedList(children);
            case ChildrenListFormat.Groups:
                return this.formatByClass(children);
            case ChildrenListFormat.TwoGroups:
                return this.formatSplitGroups(children, 2);
            case ChildrenListFormat.ThreeGroups:
                return this.formatSplitGroups(children, 3);
            default:
                return this.formatAsNumberedList(children);
        }
    }
}
