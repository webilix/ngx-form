import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputEmail extends Omit<INgxFormInput, 'english'> {
    type: 'EMAIL';
}

export class NgxFormInputEmailMethods extends NgxFormMethods<INgxFormInputEmail, string | null> {
    control(input: INgxFormInputEmail, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'ایمیل';
        validators.push(Validators.pattern(Helper.RE.EMAIL.get()));

        const value: string | null =
            input.value === undefined ? null : Helper.RE.EMAIL.verify(input.value) ? input.value : null;
        return new FormControl<string | null>(value, validators);
    }

    value(value: any): string | null {
        return Helper.RE.EMAIL.verify(value) ? value : null;
    }
}
