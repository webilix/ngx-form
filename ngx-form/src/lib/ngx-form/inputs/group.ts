import { FormControl, ValidatorFn } from '@angular/forms';

import { NgxFormMethods } from '../classes';
import { INgxFormGroup, INgxFormInput } from '../interfaces';
import { NgxMaxCountValidator, NgxMinCountValidator } from '../validators';

export interface INgxFormInputGroup
    extends Omit<INgxFormInput, 'id' | 'value' | 'optional' | 'autoFocus' | 'keyboard'> {
    type: 'GROUP';

    /**
     * Input caption copyright text
     * @type { string }
     * @override title
     */
    title: string;

    /**
     * Input value
     * @type { Array<string> }
     * @override value
     * @optional
     */
    value?: string[];

    /**
     * Input group list
     * @type { Array<INgxFormOption> }
     */
    groups: INgxFormGroup[];

    /**
     * Minimum number of required selected groups
     * @type { number }
     * @optional
     */
    minCount?: number;

    /**
     * Maximum number of acceptable selected groups
     * @type { number }
     * @optional
     */
    maxCount?: number;

    /**
     * Input group grid columns
     * @type { number }
     * @optional
     */
    columns?: number;
}

export class NgxFormInputGroupMethods extends NgxFormMethods<INgxFormInputGroup, string[] | null> {
    control(input: INgxFormInputGroup, validators: ValidatorFn[]): FormControl<string[] | null> {
        const groups: string[] = input.groups.map((group) => group.id);
        const value: string[] = (input.value || []).filter((value: string) => groups.includes(value));
        if (input.minCount) validators.push(NgxMinCountValidator<string>(input.minCount));
        if (input.maxCount) validators.push(NgxMaxCountValidator<string>(input.maxCount));

        return new FormControl<string[] | null>(value, validators);
    }

    value(value: any, input: INgxFormInputGroup): string[] | null {
        const groups: string[] = input.groups.map((group) => group.id);
        return Array.isArray(value) ? value.filter((v: string) => groups.includes(v)) : [];
    }
}
