import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Validator } from 'validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';

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
        if (input.minLength && input.minLength > 0) validators.push(Validators.minLength(input.minLength));
        if (input.maxLength && input.maxLength > 0) validators.push(Validators.maxLength(input.maxLength));

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Validator.VALUE.isString(value) && value !== '' ? value : null;
    }
}
