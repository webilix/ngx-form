import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { JalaliDateTime } from '@webilix/jalali-date-time';
import { Validator } from '@webilix/validator-library';

export const NgxMinDateValidator = (minimum: Date): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: Date = formControl.value;
        if (Validator.VALUE.isEmpty(value)) return null;

        const jalali = JalaliDateTime();
        minimum = jalali.periodDay(1, minimum).from;

        const values: Date[] = Array.isArray(value) ? value : [value];
        for (let v = 0; v < values.length; v++)
            if (Validator.VALUE.isDate(values[v]) && values[v].getTime() < minimum.getTime())
                return { 'min-date': jalali.toTitle(minimum) };

        return null;
    };
};
