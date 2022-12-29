import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { RegX } from '@webilix/regex-library';
import { Validator } from '@webilix/validator-library';

import { INgxFormInput, NgxFormMethods } from '../interfaces';

export interface INgxFormInputUsername extends Omit<INgxFormInput, 'english'> {
    type: 'USERNAME';

    /**
     * Minimum value length
     * @type { number }
     * @optional 3
     */
    minLength?: number;

    /**
     * Accept dash **(-)** letter in value
     * @type { boolean }
     * @optional true
     */
    useDash?: boolean;

    /**
     * Accept dot **(.)** letter in value
     * @type { boolean }
     * @optional true
     */
    useDot?: boolean;

    /**
     * Value must starts with **lower case english** letter
     * @type { boolean }
     * @optional true
     */
    startWithChar?: boolean;

    /**
     * Value must ends with **lower case english** letter
     * @type { boolean }
     * @optional true
     */
    endWithChar?: boolean;

    /**
     * Deactive all username validation checks
     * @type { boolean }
     * @optional false
     */
    unverified?: boolean;
}

export class NgxFormInputUsernameMethods extends NgxFormMethods<INgxFormInputUsername, string | null> {
    control(input: INgxFormInputUsername, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'نام کاربری';
        if (!input.unverified) {
            input.minLength = input.minLength === undefined ? 3 : input.minLength > 0 ? input.minLength : 3;

            validators.push(Validators.minLength(input.minLength));
            if (input.startWithChar !== false) validators.push(Validators.pattern(/^[a-z]{1}/));
            if (input.endWithChar !== false) validators.push(Validators.pattern(/[a-z]{1}$/));
            validators.push(
                Validators.pattern(
                    RegX.USERNAME.get(input.minLength, input.useDash !== false, input.useDot !== false, false, false),
                ),
            );
        }

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Validator.VALUE.isString(value) && value !== '' ? value : null;
    }
}
