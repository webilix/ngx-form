import { FormControl, ValidatorFn } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

import { INgxFormInput, NgxFormMethods } from '../interfaces';
import { NgxRangeValidator } from '../validators';

export interface INgxFormInputRange extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'RANGE';

    /**
     * Input caption copyright text
     * @type { string }
     * @override title
     */
    title: string;

    /**
     * Input value
     * @type { [number, number] }
     * @override value
     * @optional
     */
    value?: [number, number];

    /**
     * Accept same values as **minimum** and **maximum**
     * @type { boolean }
     * @optional false
     */
    equal?: boolean;

    /**
     * Minimum acceptable value
     * @type { number }
     * @optional
     */
    minimum?: number;

    /**
     * Maximum acceptable value
     * @type { number }
     * @optional
     */
    maximum?: number;

    /**
     * Accept negative values
     * @type { boolean }
     * @optional false
     */
    negative?: boolean;

    /**
     * Accept decimal values
     * @type { boolean }
     * @optional false
     */
    decimal?: boolean;
}

export class NgxFormInputRangeMethods extends NgxFormMethods<INgxFormInputRange, (number | null)[] | null> {
    control(input: INgxFormInputRange, validators: ValidatorFn[]): FormControl<(number | null)[] | null> {
        validators.push(NgxRangeValidator(!input.optional, !!input.equal, input.minimum, input.maximum));

        const value: (number | null)[] = Array.isArray(input.value)
            ? [
                  Validator.VALUE.isNumber(input.value[0]) ? input.value[0] : null,
                  Validator.VALUE.isNumber(input.value[1]) ? input.value[1] : null,
              ]
            : [null, null];
        return new FormControl<(number | null)[] | null>(value, validators);
    }

    value(value: any): (number | null)[] | null {
        return Array.isArray(value)
            ? [
                  Validator.VALUE.isNumber(value[0]) ? value[0] : null,
                  Validator.VALUE.isNumber(value[1]) ? value[1] : null,
              ]
            : [null, null];
    }
}
