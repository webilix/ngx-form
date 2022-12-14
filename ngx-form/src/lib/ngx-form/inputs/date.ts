import { FormControl, ValidatorFn } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { NgxMaxDateValidator, NgxMinDateValidator } from '../validators';

export interface INgxFormInputDate extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'DATE';

    /**
     * Input value
     * @type { Date }
     * @override value
     * @optional
     */
    value?: Date;

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

export class NgxFormInputDateMethods extends NgxFormMethods<INgxFormInputDate, Date | null> {
    control(input: INgxFormInputDate, validators: ValidatorFn[]): FormControl<Date | null> {
        input.title = input.title || 'تاریخ';
        if (input.minDate) validators.push(NgxMinDateValidator(input.minDate));
        if (input.maxDate) validators.push(NgxMaxDateValidator(input.maxDate));

        const value: Date | null =
            input.value === undefined ? null : Validator.VALUE.isDate(input.value) ? input.value : null;
        return new FormControl<Date | null>(value, validators);
    }

    value(value: any): Date | null {
        return Validator.VALUE.isDate(value) ? value : null;
    }
}
