import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { RegX } from '@webilix/regex-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputIp extends Omit<INgxFormInput, 'english'> {
    type: 'IP';
}

export class NgxFormInputIpMethods extends NgxFormMethods<INgxFormInputIp, string | null> {
    control(input: INgxFormInputIp, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'آدرس آی‌پی';
        validators.push(Validators.pattern(RegX.IP4.get()));

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return RegX.IP4.verify(value) ? value : null;
    }
}
