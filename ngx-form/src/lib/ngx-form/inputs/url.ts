import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputUrl extends Omit<INgxFormInput, 'english'> {
    type: 'URL';
}

export class NgxFormInputUrlMethods extends NgxFormMethods<INgxFormInputUrl, string | null> {
    control(input: INgxFormInputUrl, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'آدرس سایت';
        validators.push(Validators.pattern(Helper.RE.URL.get(true)));

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Helper.RE.URL.verify(value, true) ? value : null;
    }
}
