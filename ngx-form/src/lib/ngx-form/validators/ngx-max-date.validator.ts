import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { JalaliDateTime } from '@webilix/jalali-date-time';
import { Helper } from '@webilix/helper-library';

export const NgxMaxDateValidator = (maximum: Date, hour?: boolean): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: Date = formControl.value;
        if (Helper.IS.empty(value)) return null;

        const jalali = JalaliDateTime();
        const seconds = (maximum.getHours() * 60 + maximum.getMinutes()) * 60 + 59;
        maximum = !hour
            ? jalali.periodDay(1, maximum).to
            : new Date(jalali.periodDay(1, maximum).from.getTime() + seconds * 1000);

        const values: Date[] = Array.isArray(value) ? value : [value];
        for (let v = 0; v < values.length; v++)
            if (Helper.IS.date(values[v]) && values[v].getTime() > maximum.getTime())
                return { 'max-date': jalali.toFullText(maximum, { format: hour ? 'W، d N Y H:I' : 'W، d N Y' }) };

        return null;
    };
};
