import { FormControl, ValidatorFn } from '@angular/forms';

import { Validator } from 'validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';

export interface INgxFormInputColor extends Omit<INgxFormInput, 'english'> {
    type: 'COLOR';
    colors?: string[];
}

export class NgxFormInputColorMethods extends NgxFormInputMethods<INgxFormInputColor, string | null> {
    control(input: INgxFormInputColor, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'رنگ';

        const value: string | null =
            input.value !== undefined && input.value !== ''
                ? input.colors && input.colors.length !== 0
                    ? input.colors.find((color) => color === input.value)
                        ? input.value
                        : null
                    : input.value
                : null;
        return new FormControl<string | null>(value, validators);
    }

    value(value: any, input: INgxFormInputColor): string | null {
        return Validator.VALUE.isString(value) && value !== ''
            ? input.colors && input.colors.length !== 0
                ? input.colors.find((color) => color === value)
                    ? value
                    : null
                : value
            : null;
    }
}
