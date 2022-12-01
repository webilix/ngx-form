import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { JalaliDateTime } from 'jalali-date-time';
import { Validator } from 'validator-library';

export const NgxMaxDateValidator = (maximum: Date): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: Date = formControl.value;
        if (Validator.VALUE.isEmpty(value) || !Validator.VALUE.isDate(value)) return null;

        const jalali = JalaliDateTime();
        maximum = jalali.periodDay(1, maximum).to;
        return value.getTime() > maximum.getTime() ? { 'max-date': jalali.toTitle(maximum) } : null;
    };
};
