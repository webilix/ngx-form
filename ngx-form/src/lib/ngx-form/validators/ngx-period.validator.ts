import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { JalaliDateTime } from '@webilix/jalali-date-time';
import { Helper } from '@webilix/helper-library';

export const NgxPeriodValidator = (required: boolean, equal: boolean): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const values: Date[] = Array.isArray(formControl.value) ? formControl.value : [null, null];

        const minimum: Date | null = Helper.IS.date(values[0]) ? values[0] : null;
        const maximum: Date | null = Helper.IS.date(values[1]) ? values[1] : null;
        if (required && (minimum === null || maximum === null)) return { required: true };

        if (minimum === null || maximum === null) return null;

        const jalali = JalaliDateTime();
        return (equal && jalali.toDate(minimum) > jalali.toDate(maximum)) ||
            (!equal && jalali.toDate(minimum) >= jalali.toDate(maximum))
            ? { period: { equal } }
            : null;
    };
};
