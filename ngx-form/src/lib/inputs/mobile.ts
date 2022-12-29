import { FormControl, ValidatorFn } from '@angular/forms';

import { RegX } from '@webilix/regex-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputMobile extends Omit<INgxFormInput, 'english'> {
    type: 'MOBILE';
}

export class NgxFormInputMobileMethods extends NgxFormMethods<INgxFormInputMobile, string | null> {
    control(input: INgxFormInputMobile, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'موبایل';

        const value: string | null =
            typeof input.value === 'string'
                ? RegX.MOBILE.verify(input.value)
                    ? input.value.substring(2)
                    : null
                : null;
        return new FormControl<string | null>(value, validators);
    }

    value(value: any): string | null {
        return RegX.MOBILE.verify(`09${value}`) ? `09${value}` : null;
    }
}
