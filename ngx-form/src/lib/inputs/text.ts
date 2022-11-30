import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Validator } from 'validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';
import { NgxLengthValidator } from '../validators';

export interface INgxFormInputText extends INgxFormInput {
    type: 'TEXT';
    title: string;
    suffix?: string;
    minLength?: number;
    maxLength?: number;
    counter?: boolean;
}

export class NgxFormInputTextMethods extends NgxFormInputMethods<INgxFormInputText, string | null> {
    control(input: INgxFormInputText, validators: ValidatorFn[]): FormControl<string | null> {
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
