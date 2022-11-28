import { FormControl, ValidatorFn } from '@angular/forms';

import { Validator } from 'validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';
import { NgxNationalCodeValidator } from '../validators';

export interface INgxFormInputNationalCode extends Omit<INgxFormInput, 'english'> {
    type: 'NATIONAL-CODE';
}

export class NgxFormInputNationalCodeMethods extends NgxFormInputMethods<INgxFormInputNationalCode, string | null> {
    control(input: INgxFormInputNationalCode, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'کد ملی';
        validators.push(NgxNationalCodeValidator());

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Validator.VALUE.isString(value) && Validator.STRING.isNationalCode(value) ? value : null;
    }
}
