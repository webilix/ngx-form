import { FormControl, ValidatorFn } from '@angular/forms';

import { INgxFormInput, INgxFormOption, NgxFormMethods } from '../interfaces';
import { NgxMaxCountValidator, NgxMinCountValidator } from '../validators';

export interface INgxFormInputMultiSelect extends Omit<INgxFormInput, 'value' | 'optional'> {
    type: 'MULTI-SELECT';

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
     * Input options list
     * @type { Array<INgxFormOption> }
     */
    options: INgxFormOption[];

    /**
     * Minimum number of required selected options
     * @type { number }
     * @optional
     */
    minCount?: number;

    /**
     * Maximum number of acceptable selected options
     * @type { number }
     * @optional
     */
    maxCount?: number;

    /**
     * Input view method
     * @type { string }
     * @enum 'CHECKBOX', 'SELECT', 'TAG'
     * @optional CHECKBOX
     */
    view?: 'CHECKBOX' | 'SELECT' | 'TAG';
}

export class NgxFormInputMultiSelectMethods extends NgxFormMethods<INgxFormInputMultiSelect, string[] | null> {
    control(input: INgxFormInputMultiSelect, validators: ValidatorFn[]): FormControl<string[] | null> {
        const options: string[] = input.options.map((option) => option.id);
        const value: string[] = (input.value || []).filter((value: string) => options.includes(value));
        if (input.minCount) validators.push(NgxMinCountValidator<string>(input.minCount));
        if (input.maxCount) validators.push(NgxMaxCountValidator<string>(input.maxCount));

        return new FormControl<string[] | null>(value, validators);
    }

    value(value: any, input: INgxFormInputMultiSelect): string[] | null {
        const options: string[] = input.options.map((option) => option.id);
        return Array.isArray(value) ? value.filter((v: string) => options.includes(v)) : [];
    }
}
