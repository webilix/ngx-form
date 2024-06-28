import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { NgxMaxDateValidator, NgxMinDateValidator } from '../validators';

export interface INgxFormInputDate extends Omit<INgxFormInput, 'id' | 'english' | 'value' | 'autoFocus' | 'keyboard'> {
    type: 'DATE';

    /**
     * Input value
     * @type { Date }
     * @override value
     * @optional
     */
    value?: Date;

    /**
     * Show/Select hour and minute
     * @type { boolean }
     * @override value
     * @optional
     */
    hour?: boolean;

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
        if (input.minDate) validators.push(NgxMinDateValidator(input.minDate, !!input.hour));
        if (input.maxDate) validators.push(NgxMaxDateValidator(input.maxDate, !!input.hour));

        const minDate: number | null = input.minDate ? input.minDate.getTime() : null;
        const maxDate: number | null = input.maxDate ? input.maxDate.getTime() : null;
        let value: Date | null = input.value === undefined ? null : Helper.IS.date(input.value) ? input.value : null;
        if (value && minDate && value.getTime() < minDate) value = new Date(minDate + 1000);
        if (value && maxDate && value.getTime() > maxDate) value = new Date(maxDate - 1000);

        return new FormControl<Date | null>(value, validators);
    }

    value(value: any): Date | null {
        return Helper.IS.date(value) ? value : null;
    }
}
