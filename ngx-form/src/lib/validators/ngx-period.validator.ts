import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { JalaliDateTime } from 'jalali-date-time';
import { Validator } from 'validator-library';

export const NgxPeriodValidator = (required: boolean, equal: boolean): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const values: Date[] = Array.isArray(formControl.value) ? formControl.value : [null, null];

        const minimum: Date | null = Validator.VALUE.isDate(values[0]) ? values[0] : null;
        const maximum: Date | null = Validator.VALUE.isDate(values[1]) ? values[1] : null;
        if (required && (minimum === null || maximum === null)) return { required: true };

        if (minimum === null || maximum === null) return null;

        const jalali = JalaliDateTime();
        return (equal && jalali.toDate(minimum) > jalali.toDate(maximum)) ||
            (!equal && jalali.toDate(minimum) >= jalali.toDate(maximum))
            ? { period: { equal } }
            : null;
    };
};
