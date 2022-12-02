import { FormControl, ValidatorFn } from '@angular/forms';

import { Validator } from 'validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { INgxFormOption } from '../interfaces/ngx-option';
import { NgxFormInputMethods } from '../ngx-form.methods';
import { NgxDuplicateValidator, NgxMaxCountValidator, NgxMinCountValidator } from '../validators';

export interface INgxFormInputOptionList extends Omit<INgxFormInput, 'optional' | 'value'> {
    type: 'OPTION-LIST';
    title: string;
    value?: INgxFormOption[];
    format?: 'BANK-CARD' | 'DOMAIN' | 'EMAIL' | 'IP' | 'MOBILE' | 'NATIONAL-CODE' | 'NUMERIC' | 'URL';
    sort?: boolean;
    duplicate?: boolean;
    minCount?: number;
    maxCount?: number;
}

export class NgxFormInputOptionListMethods extends NgxFormInputMethods<
    INgxFormInputOptionList,
    INgxFormOption[] | null
> {
    control(input: INgxFormInputOptionList, validators: ValidatorFn[]): FormControl<INgxFormOption[] | null> {
        if (!input.duplicate)
            validators.push(NgxDuplicateValidator<INgxFormOption>((value: INgxFormOption) => value.title));
        if (input.minCount) validators.push(NgxMinCountValidator<INgxFormOption>(input.minCount));
        if (input.maxCount) validators.push(NgxMaxCountValidator<INgxFormOption>(input.maxCount));

        const value: INgxFormOption[] = (Array.isArray(input.value) ? input.value : [])
            .filter((value: INgxFormOption) => {
                if (!Validator.VALUE.isObject(value)) return null;
                if (!Validator.VALUE.isString(value['id']) || value['id'].length === 0) return null;
                if (!Validator.VALUE.isString(value['title']) || value['title'].length === 0) return null;
                return value;
            })
            .filter((value: INgxFormOption) => value !== null);
        return new FormControl<INgxFormOption[] | null>(value, validators);
    }

    value(value: any): INgxFormOption[] | null {
        return Array.isArray(value) ? value : [];
    }
}
