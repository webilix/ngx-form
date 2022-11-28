import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { RegX } from 'regex-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';

export interface INgxFormInputUrl extends Omit<INgxFormInput, 'english'> {
    type: 'URL';
}

export class NgxFormInputUrlMethods extends NgxFormInputMethods<INgxFormInputUrl, string | null> {
    control(input: INgxFormInputUrl, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'آدرس سایت';
        validators.push(Validators.pattern(RegX.URL.get(true)));

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return RegX.URL.verify(value, true) ? value : null;
    }
}
