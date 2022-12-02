import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

export const NgxNationalCodeValidator = (): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string = formControl.value;
        if (Validator.VALUE.isEmpty(value) || !Validator.VALUE.isString(value) || value.length !== 10) return null;

        return !Validator.STRING.isNationalCode(value) ? { 'national-code': true } : null;
    };
};
