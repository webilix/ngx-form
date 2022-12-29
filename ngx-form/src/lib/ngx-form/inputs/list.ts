import { FormControl, ValidatorFn } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { NgxDuplicateValidator, NgxMaxCountValidator, NgxMinCountValidator } from '../validators';

export interface INgxFormInputList extends Omit<INgxFormInput, 'optional' | 'value'> {
    type: 'LIST';

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
     * Acceptable list items format
     * @type { string }
     * @enum 'BANK-CARD', 'DOMAIN', 'EMAIL', 'IP', 'MOBILE', 'NATIONAL-CODE', 'NUMERIC', 'URL'
     * @optional
     */
    format?: 'BANK-CARD' | 'DOMAIN' | 'EMAIL' | 'IP' | 'MOBILE' | 'NATIONAL-CODE' | 'NUMERIC' | 'URL';

    /**
     * Activate list sort functionality
     * @type { boolean }
     * @optional false
     */
    sort?: boolean;

    /**
     * Accept duplicate values on list
     * @type { boolean }
     * @optional false
     */
    duplicate?: boolean;

    /**
     * Minimum number of required values in list
     * @type { number }
     * @optional
     */
    minCount?: number;

    /**
     * Maximum number of acceptable values in list
     * @type { number }
     * @optional
     */
    maxCount?: number;
}

export class NgxFormInputListMethods extends NgxFormMethods<INgxFormInputList, string[] | null> {
    control(input: INgxFormInputList, validators: ValidatorFn[]): FormControl<string[] | null> {
        if (!input.duplicate) validators.push(NgxDuplicateValidator<string>((value: string) => value));
        if (input.minCount) validators.push(NgxMinCountValidator<string>(input.minCount));
        if (input.maxCount) validators.push(NgxMaxCountValidator<string>(input.maxCount));

        const value: string[] = (Array.isArray(input.value) ? input.value : []).filter(
            (value: string) => Validator.VALUE.isString(value) && value.length > 0,
        );
        return new FormControl<string[] | null>(value, validators);
    }

    value(value: any): string[] | null {
        return Array.isArray(value) ? value : [];
    }
}
