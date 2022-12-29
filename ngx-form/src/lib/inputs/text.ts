import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

import { INgxFormInput, NgxFormMethods } from '../interfaces';
import { NgxLengthValidator } from '../validators';

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

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Validator.VALUE.isString(value) && value !== '' ? value : null;
    }
}
