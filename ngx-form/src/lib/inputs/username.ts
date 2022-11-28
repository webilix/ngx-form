import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { RegX } from 'regex-library';
import { Validator } from 'validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';

export interface INgxFormInputUsername extends Omit<INgxFormInput, 'english'> {
    type: 'USERNAME';
    minLength?: number;
    useDash?: boolean;
    useDot?: boolean;
    startWithChar?: boolean;
    endWithChar?: boolean;
    unverified?: boolean;
}

export class NgxFormInputUsernameMethods extends NgxFormInputMethods<INgxFormInputUsername, string | null> {
    control(input: INgxFormInputUsername, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'نام کاربری';
        if (!input.unverified) {
            input.minLength = input.minLength === undefined ? 3 : input.minLength > 0 ? input.minLength : 3;

            validators.push(Validators.minLength(input.minLength));
            if (input.startWithChar !== false) validators.push(Validators.pattern(/^[a-z]{1}/));
            if (input.endWithChar !== false) validators.push(Validators.pattern(/[a-z]{1}$/));
            validators.push(
                Validators.pattern(
                    RegX.USERNAME.get(input.minLength, input.useDash !== false, input.useDot !== false, false, false),
                ),
            );
        }

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Validator.VALUE.isString(value) && value !== '' ? value : null;
    }
}
