import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { JalaliDateTime } from 'jalali-date-time';
import { Validator } from 'validator-library';

export const NgxMinDateValidator = (minimum: Date): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: Date = formControl.value;
        if (Validator.VALUE.isEmpty(value) || !Validator.VALUE.isDate(value)) return null;

        const jalali = JalaliDateTime();
        minimum = jalali.periodDay(1, minimum).from;
        return value.getTime() < minimum.getTime() ? { 'min-date': jalali.toTitle(minimum) } : null;
    };
};
