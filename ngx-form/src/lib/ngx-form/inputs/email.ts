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

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Helper.RE.EMAIL.verify(value) ? value : null;
    }
}
