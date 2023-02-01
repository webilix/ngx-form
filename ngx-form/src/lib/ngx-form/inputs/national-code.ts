import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { NgxNationalCodeValidator } from '../validators';

export interface INgxFormInputNationalCode extends Omit<INgxFormInput, 'english'> {
    type: 'NATIONAL-CODE';
}

export class NgxFormInputNationalCodeMethods extends NgxFormMethods<INgxFormInputNationalCode, string | null> {
    control(input: INgxFormInputNationalCode, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'کد ملی';
        validators.push(NgxNationalCodeValidator());

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Helper.IS.string(value) && Helper.IS.STRING.nationalCode(value) ? value : null;
    }
}
