import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Validator } from 'validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';
import { NgxLengthValidator } from '../validators';

export interface INgxFormInputNumeric extends Omit<INgxFormInput, 'english'> {
    type: 'NUMERIC';
    title: string;
    minLength?: number;
    maxLength?: number;
}

export class NgxFormInputNumericMethods extends NgxFormInputMethods<INgxFormInputNumeric, string | null> {
    control(input: INgxFormInputNumeric, validators: ValidatorFn[]): FormControl<string | null> {
        validators.push(Validators.pattern(/^[0-9]*$/));

        const minLength: number | null = input.minLength && input.minLength > 0 ? input.minLength : null;
        const maxLength: number | null = input.maxLength && input.maxLength > 0 ? input.maxLength : null;
        if (minLength && maxLength && minLength === maxLength) validators.push(NgxLengthValidator(minLength));
        else {
            if (minLength && minLength > 0) validators.push(Validators.minLength(minLength));
            if (maxLength && maxLength > 0) validators.push(Validators.maxLength(maxLength));
        }

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Validator.VALUE.isString(value) && value !== '' ? value : null;
    }
}