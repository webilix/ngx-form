import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { NgxLengthValidator, NgxPatternValidator } from '../validators';

export interface INgxFormInputText extends INgxFormInput {
    type: 'TEXT';

    /**
     * Input caption copyright text
     * @type { string }
     * @override title
     */
    title: string;

    /**
     * Suffix copyright text
     * @type { string }
     * @optional
     */
    suffix?: string;

    /**
     * Minimum acceptable value length
     * @type { number }
     * @optional
     *
     * **NOTE:** To restrict length to specific value, use same value for **minimum** and **maximum** length
     */
    minLength?: number;

    /**
     * Maximum acceptable value length
     * @type { number }
     * @optional
     *
     * **NOTE:** To restrict length to specific value, use same value for **minimum** and **maximum** length
     */
    maxLength?: number;

    /**
     * Input value pattern check
     * @type { Object }
     * @optional
     *
     * @property regex { RegExp } regular expression pattern
     * @property error { String } custom error message
     */
    pattern?: {
        regex: RegExp;
        error?: string;
    };

    /**
     * Show value length counter
     * @type { boolean }
     * @optional false
     */
    counter?: boolean;
}

export class NgxFormInputTextMethods extends NgxFormMethods<INgxFormInputText, string | null> {
    control(input: INgxFormInputText, validators: ValidatorFn[]): FormControl<string | null> {
        const minLength: number | null = input.minLength && input.minLength > 0 ? input.minLength : null;
        const maxLength: number | null = input.maxLength && input.maxLength > 0 ? input.maxLength : null;
        if (minLength && maxLength && minLength === maxLength) validators.push(NgxLengthValidator(minLength));
        else {
            if (minLength && minLength > 0) validators.push(Validators.minLength(minLength));
            if (maxLength && maxLength > 0) validators.push(Validators.maxLength(maxLength));
        }
        if (input.pattern) validators.push(NgxPatternValidator(input.pattern.regex, input.pattern.error || null));

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Helper.IS.string(value) && value !== '' ? value : null;
    }
}
