import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { NgxMaxDateValidator, NgxMinDateValidator, NgxPeriodValidator } from '../validators';

export interface INgxFormInputPeriod
    extends Omit<INgxFormInput, 'id' | 'english' | 'value' | 'autoFocus' | 'floatLabel' | 'keyboard'> {
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
                  Helper.IS.date(input.value[0]) ? input.value[0] : null,
                  Helper.IS.date(input.value[1]) ? input.value[1] : null,
              ]
            : [null, null];
        return new FormControl<(Date | null)[] | null>(value, validators);
    }

    value(value: any): (Date | null)[] | null {
        return Array.isArray(value)
            ? [Helper.IS.date(value[0]) ? value[0] : null, Helper.IS.date(value[1]) ? value[1] : null]
            : [null, null];
    }
}
