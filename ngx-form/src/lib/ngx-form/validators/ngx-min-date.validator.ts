import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { JalaliDateTime } from '@webilix/jalali-date-time';
import { Helper } from '@webilix/helper-library';

export const NgxMinDateValidator = (minimum: Date, hour?: boolean): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: Date = formControl.value;
        if (Helper.IS.empty(value)) return null;

        const jalali = JalaliDateTime();
        const seconds = (minimum.getHours() * 60 + minimum.getMinutes()) * 60;
        minimum = !hour
            ? jalali.periodDay(1, minimum).from
            : new Date(jalali.periodDay(1, minimum).from.getTime() + seconds * 1000);

        const values: Date[] = Array.isArray(value) ? value : [value];
        for (let v = 0; v < values.length; v++)
            if (Helper.IS.date(values[v]) && values[v].getTime() < minimum.getTime())
                return { 'min-date': jalali.toFullText(minimum, { format: hour ? 'W، d N Y H:I' : 'W، d N Y' }) };

        return null;
    };
};
