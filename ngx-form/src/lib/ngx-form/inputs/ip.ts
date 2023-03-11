import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputIp extends Omit<INgxFormInput, 'english'> {
    type: 'IP';
}

export class NgxFormInputIpMethods extends NgxFormMethods<INgxFormInputIp, string | null> {
    control(input: INgxFormInputIp, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'آدرس آی‌پی';
        validators.push(Validators.pattern(Helper.RE.IP4.get()));

        const value: string | null =
            input.value === undefined ? null : Helper.RE.IP4.verify(input.value) ? input.value : null;
        return new FormControl<string | null>(value, validators);
    }

    value(value: any): string | null {
        return Helper.RE.IP4.verify(value) ? value : null;
    }
}
