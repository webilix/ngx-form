import { FormControl, ValidatorFn } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

import { INgxFormInput, NgxFormMethods } from '../interfaces';
import { NgxMaxDateValidator, NgxMinDateValidator, NgxPeriodValidator } from '../validators';

export interface INgxFormInputPeriod extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'PERIOD';

    /**
     * Input value
     * @type { [Date, Date] }
     * @override value
     * @optional
     */
    value?: [Date, Date];

    /**
     * Accept same values as **minimum** and **maximum**
     * @type { boolean }
     * @optional false
     */
    equal?: boolean;

    /**
     * Minimum acceptable value
     * @type { Date }
     * @optional
     */
    minDate?: Date;

    /**
     * Maximum acceptable value
     * @type { Date }
     * @optional
     */
    maxDate?: Date;
}

export class NgxFormInputPeriodMethods extends NgxFormMethods<INgxFormInputPeriod, (Date | null)[] | null> {
    control(input: INgxFormInputPeriod, validators: ValidatorFn[]): FormControl<(Date | null)[] | null> {
        input.title = input.title || 'محدوده زمانی';
        if (input.minDate) validators.push(NgxMinDateValidator(input.minDate));
        if (input.maxDate) validators.push(NgxMaxDateValidator(input.maxDate));
        validators.push(NgxPeriodValidator(!input.optional, !!input.equal));

        const value: (Date | null)[] = Array.isArray(input.value)
            ? [
                  Validator.VALUE.isDate(input.value[0]) ? input.value[0] : null,
                  Validator.VALUE.isDate(input.value[1]) ? input.value[1] : null,
              ]
            : [null, null];
        return new FormControl<(Date | null)[] | null>(value, validators);
    }

    value(value: any): (Date | null)[] | null {
        return Array.isArray(value)
            ? [Validator.VALUE.isDate(value[0]) ? value[0] : null, Validator.VALUE.isDate(value[1]) ? value[1] : null]
            : [null, null];
    }
}
