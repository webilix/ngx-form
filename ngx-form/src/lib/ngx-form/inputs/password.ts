import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { RegX } from '@webilix/regex-library';
import { Validator } from '@webilix/validator-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputPassword extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'PASSWORD';

    /**
     * Minimum value length
     * @type { number }
     * @optional 8
     */
    minLength?: number;

    /**
     * Force to use at least one **English lower case** letter in value
     * @type { boolean }
     * @optional true
     */
    forceLowerCase?: boolean;

    /**
     * Force to use at least one **English upper case** letter in value
     * @type { boolean }
     * @optional true
     */
    forceUpperCase?: boolean;

    /**
     * Force to use at least one **English number** letter in value
     * @type { boolean }
     * @optional true
     */
    forceNumber?: boolean;

    /**
     * Deactive all password validation checks
     * @type { boolean }
     * @optional false
     */
    unverified?: boolean;
}

export class NgxFormInputPasswordMethods extends NgxFormMethods<INgxFormInputPassword, string | null> {
    control(input: INgxFormInputPassword, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'کلمه عبور';
        if (!input.unverified) {
            input.minLength = input.minLength === undefined ? 8 : input.minLength > 0 ? input.minLength : 8;

            validators.push(Validators.minLength(input.minLength));
            if (input.forceLowerCase !== false)
                validators.push(Validators.pattern(RegX.PASSWORD.get(input.minLength, true, false, false)));
            if (input.forceUpperCase !== false)
                validators.push(Validators.pattern(RegX.PASSWORD.get(input.minLength, false, true, false)));
            if (input.forceNumber !== false)
                validators.push(Validators.pattern(RegX.PASSWORD.get(input.minLength, false, false, true)));
        }

        return new FormControl<string | null>(null, validators);
    }

    value(value: any): string | null {
        return Validator.VALUE.isString(value) && value !== '' ? value : null;
    }
}
