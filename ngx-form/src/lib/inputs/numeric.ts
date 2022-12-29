import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { NgxLengthValidator } from '../validators';

export interface INgxFormInputNumeric extends Omit<INgxFormInput, 'english'> {
    type: 'NUMERIC';

    /**
     * Input caption copyright text
     * @type { string }
     * @override title
     */
    title: string;

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
}

export class NgxFormInputNumericMethods extends NgxFormMethods<INgxFormInputNumeric, string | null> {
    control(input: INgxFormInputNumeric, validators: ValidatorFn[]): FormControl<string | null> {
        validators.push(Validators.pattern(/^[0-9]*$/));

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
