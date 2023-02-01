import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { JalaliDateTime } from '@webilix/jalali-date-time';
import { Helper } from '@webilix/helper-library';

export const NgxMinDateValidator = (minimum: Date): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: Date = formControl.value;
        if (Helper.IS.empty(value)) return null;

        const jalali = JalaliDateTime();
        minimum = jalali.periodDay(1, minimum).from;

        const values: Date[] = Array.isArray(value) ? value : [value];
        for (let v = 0; v < values.length; v++)
            if (Helper.IS.date(values[v]) && values[v].getTime() < minimum.getTime())
                return { 'min-date': jalali.toTitle(minimum) };

        return null;
    };
};
