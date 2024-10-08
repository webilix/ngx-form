import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { NgxMaxValidator, NgxMinValidator, NgxMultiplyOfValidator } from '../validators';

export interface INgxFormInputPrice extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'PRICE';

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
     * Constraint value to be multiple of a number
     * @type { number }
     * @optional
     */
    multiplyOf?: number;

    /**
     * Input currency
     * @type { string }
     * @optional 'ریال'
     */
    currency?: string;

    /**
     * Show text value
     * @type { boolean }
     * @optional false
     */
    showText?: boolean;
}

export class NgxFormInputPriceMethods extends NgxFormMethods<INgxFormInputPrice, number | null> {
    control(input: INgxFormInputPrice, validators: ValidatorFn[]): FormControl<number | null> {
        input.currency = input.currency || 'ریال';
        if (input.minimum) validators.push(NgxMinValidator(input.minimum));
        if (input.maximum) validators.push(NgxMaxValidator(input.maximum));
        if (input.multiplyOf) validators.push(NgxMultiplyOfValidator(input.multiplyOf));

        const value: number | null =
            input.value === undefined
                ? null
                : Helper.IS.number(input.value) && input.value >= 0 && input.value % 1 === 0
                ? input.value
                : null;
        return new FormControl<number | null>(value, validators);
    }

    value(value: any): number | null {
        if (Helper.IS.empty(value)) return null;

        value = Helper.IS.string(value) ? +value.replace(/,/g, '') : value;
        return Helper.IS.number(value) ? value : null;
    }
}
