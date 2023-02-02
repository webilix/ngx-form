import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputNumber extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'NUMBER';

    /**
     * Input caption copyright text
     * @type { string }
     * @override title
     */
    title: string;

    /**
     * Input value
     * @type { number }
     * @override value
     * @optional
     */
    value?: number;

    /**
     * Suffix copyright text
     * @type { string }
     * @optional
     */
    suffix?: string;

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

export class NgxFormInputNumberMethods extends NgxFormMethods<INgxFormInputNumber, number | null> {
    control(input: INgxFormInputNumber, validators: ValidatorFn[]): FormControl<number | null> {
        if (input.minimum) validators.push(Validators.min(input.minimum));
        if (input.maximum) validators.push(Validators.max(input.maximum));

        const value: number | null =
            input.value === undefined ? null : Helper.IS.number(input.value) ? input.value : null;
        return new FormControl<number | null>(value, validators);
    }

    value(value: any): number | null {
        return Helper.IS.number(value) ? value : null;
    }
}
