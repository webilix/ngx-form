import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

export const NgxMaxValidator = <T>(maximum: number): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: number = Helper.IS.string(formControl.value)
            ? +formControl.value.replace(/,/g, '')
            : formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.number(value)) return null;

        return value <= maximum ? null : { maximum };
    };
};
