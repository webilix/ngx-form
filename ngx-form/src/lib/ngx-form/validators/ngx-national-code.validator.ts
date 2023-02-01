import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

export const NgxNationalCodeValidator = (): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string = formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.string(value) || value.length !== 10) return null;

        return !Helper.IS.STRING.nationalCode(value) ? { 'national-code': true } : null;
    };
};
