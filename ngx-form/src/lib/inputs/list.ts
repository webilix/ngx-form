import { FormControl, ValidatorFn } from '@angular/forms';

import { Validator } from 'validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';
import { NgxDuplicateValidator, NgxMaxCountValidator, NgxMinCountValidator } from '../validators';

export interface INgxFormInputList extends Omit<INgxFormInput, 'optional' | 'value'> {
    type: 'LIST';
    title: string;
    value?: string[];
    format?: 'BANK-CARD' | 'DOMAIN' | 'EMAIL' | 'IP' | 'MOBILE' | 'NATIONAL-CODE' | 'NUMERIC' | 'URL';
    sort?: boolean;
    duplicate?: boolean;
    minCount?: number;
    maxCount?: number;
}

export class NgxFormInputListMethods extends NgxFormInputMethods<INgxFormInputList, string[] | null> {
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
