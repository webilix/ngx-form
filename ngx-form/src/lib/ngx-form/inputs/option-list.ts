import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput, INgxFormOption } from '../interfaces';
import { NgxDuplicateValidator, NgxMaxCountValidator, NgxMinCountValidator } from '../validators';

export interface INgxFormInputOptionList extends Omit<INgxFormInput, 'optional' | 'value' | 'autofocus'> {
    type: 'OPTION-LIST';

    /**
     * Input caption copyright text
     * @type { string }
     * @override title
     */
    title: string;

    /**
     * Input value
     * @type { Array<INgxFormOption> }
     * @override value
     * @optional
     */
    value?: INgxFormOption[];

    /**
     * Acceptable list items value format
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

export class NgxFormInputOptionListMethods extends NgxFormMethods<INgxFormInputOptionList, INgxFormOption[] | null> {
    control(input: INgxFormInputOptionList, validators: ValidatorFn[]): FormControl<INgxFormOption[] | null> {
        if (!input.duplicate)
            validators.push(NgxDuplicateValidator<INgxFormOption>((value: INgxFormOption) => value.title));
        if (input.minCount) validators.push(NgxMinCountValidator<INgxFormOption>(input.minCount));
        if (input.maxCount) validators.push(NgxMaxCountValidator<INgxFormOption>(input.maxCount));

        const value: INgxFormOption[] = (Array.isArray(input.value) ? input.value : [])
            .filter((value: INgxFormOption) => {
                if (!Helper.IS.object(value)) return null;
                if (!Helper.IS.string(value['id']) || value['id'].length === 0) return null;
                if (!Helper.IS.string(value['title']) || value['title'].length === 0) return null;
                return value;
            })
            .filter((value: INgxFormOption) => value !== null);
        return new FormControl<INgxFormOption[] | null>(value, validators);
    }

    value(value: any): INgxFormOption[] | null {
        return Array.isArray(value) ? value : [];
    }
}
