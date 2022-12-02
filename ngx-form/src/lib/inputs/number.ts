import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';

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

export class NgxFormInputNumberMethods extends NgxFormInputMethods<INgxFormInputNumber, number | null> {
    control(input: INgxFormInputNumber, validators: ValidatorFn[]): FormControl<number | null> {
        if (input.minimum) validators.push(Validators.min(input.minimum));
        if (input.maximum) validators.push(Validators.max(input.maximum));

        const value: number | null =
            input.value === undefined ? null : Validator.VALUE.isNumber(input.value) ? input.value : null;
        return new FormControl<number | null>(value, validators);
    }

    value(value: any): number | null {
        return Validator.VALUE.isNumber(value) ? value : null;
    }
}
