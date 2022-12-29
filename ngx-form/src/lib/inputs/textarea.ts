import { ValidatorFn, FormControl, Validators } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputTextarea extends INgxFormInput {
    type: 'TEXTAREA';

    /**
     * Input caption copyright text
     * @type { string }
     * @override title
     */
    title: string;

    /**
     * Textarea input minimum hight
     * @type { number }
     * @optional 75
     */
    height?: number;

    /**
     * Activate textarea auto-height functionality
     * @type { boolean }
     * @optional false
     */
    autoHeight?: boolean;

    /**
     * Textarea input maximum hight
     * @type { number }
     */
    maxLength?: number;

    /**
     * Show value length counter
     * @type { boolean }
     * @optional false
     */
    counter?: boolean;
}

export class NgxFormInputTextareaMethods extends NgxFormMethods<INgxFormInputTextarea, string | null> {
    control(input: INgxFormInputTextarea, validators: ValidatorFn[]): FormControl<string | null> {
        if (input.maxLength && input.maxLength > 0) validators.push(Validators.maxLength(input.maxLength));

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Validator.VALUE.isString(value) && value !== '' ? value : null;
    }
}
