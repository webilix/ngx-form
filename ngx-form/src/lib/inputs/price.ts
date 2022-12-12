import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';

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
     * Input currency
     * @type { string }
     * @optional 'ریال'
     */
    currency?: string;
}

export class NgxFormInputPriceMethods extends NgxFormInputMethods<INgxFormInputPrice, number | null> {
    control(input: INgxFormInputPrice, validators: ValidatorFn[]): FormControl<number | null> {
        input.currency = input.currency || 'ریال';
        if (input.minimum) validators.push(Validators.min(input.minimum));
        if (input.maximum) validators.push(Validators.max(input.maximum));

        const value: number | null =
            input.value === undefined
                ? null
                : Validator.VALUE.isNumber(input.value) && input.value >= 0 && input.value % 1 === 0
                ? input.value
                : null;
        return new FormControl<number | null>(value, validators);
    }

    value(value: any): number | null {
        return Validator.VALUE.isNumber(value) ? value : null;
    }
}
