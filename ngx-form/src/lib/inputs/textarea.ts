import { ValidatorFn, FormControl, Validators } from '@angular/forms';

import { Validator } from 'validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';

export interface INgxFormInputTextarea extends INgxFormInput {
    type: 'TEXTAREA';
    title: string;
    height?: number;
    autoHeight?: boolean;
    maxLength?: number;
    counter?: boolean;
}

export class NgxFormInputTextareaMethods extends NgxFormInputMethods<INgxFormInputTextarea, string | null> {
    control(input: INgxFormInputTextarea, validators: ValidatorFn[]): FormControl<string | null> {
        if (input.maxLength && input.maxLength > 0) validators.push(Validators.maxLength(input.maxLength));

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Validator.VALUE.isString(value) && value !== '' ? value : null;
    }
}
