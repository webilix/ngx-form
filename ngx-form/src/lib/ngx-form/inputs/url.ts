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

        const value: string | null =
            input.value === undefined ? null : Helper.RE.URL.verify(input.value, true) ? input.value : null;
        return new FormControl<string | null>(value, validators);
    }

    value(value: any): string | null {
        return Helper.RE.URL.verify(value, true) ? value : null;
    }
}
