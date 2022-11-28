import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { RegX } from 'regex-library';
import { Validator } from 'validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';

export interface INgxFormInputPassword extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'PASSWORD';
    minLength?: number;
    forceLowerCase?: boolean;
    forceUpperCase?: boolean;
    forceNumber?: boolean;
    unverified?: boolean;
}

export class NgxFormInputPasswordMethods extends NgxFormInputMethods<INgxFormInputPassword, string | null> {
    control(input: INgxFormInputPassword, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'کلمه عبور';
        if (!input.unverified) {
            input.minLength = input.minLength === undefined ? 8 : input.minLength > 0 ? input.minLength : 8;

            validators.push(Validators.minLength(input.minLength));
            if (input.forceLowerCase !== false)
                validators.push(Validators.pattern(RegX.PASSWORD.get(input.minLength, true, false, false)));
            if (input.forceUpperCase !== false)
                validators.push(Validators.pattern(RegX.PASSWORD.get(input.minLength, false, true, false)));
            if (input.forceNumber !== false)
                validators.push(Validators.pattern(RegX.PASSWORD.get(input.minLength, false, false, true)));
        }

        return new FormControl<string | null>(null, validators);
    }

    value(value: any): string | null {
        return Validator.VALUE.isString(value) && value !== '' ? value : null;
    }
}
