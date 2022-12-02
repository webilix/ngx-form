import { FormControl, ValidatorFn } from '@angular/forms';

import { Validator } from 'validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';
import { NgxRangeValidator } from '../validators';

export interface INgxFormInputRange extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'RANGE';
    title: string;
    value?: number[];
    equal?: boolean;
    minimum?: number;
    maximum?: number;
    negative?: boolean;
    decimal?: boolean;
}

export class NgxFormInputRangeMethods extends NgxFormInputMethods<INgxFormInputRange, (number | null)[] | null> {
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
