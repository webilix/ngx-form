import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Validator } from 'validator-library';

export const NgxLengthValidator = (length: number): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string = formControl.value;
        if (Validator.VALUE.isEmpty(value) || !Validator.VALUE.isString(value)) return null;

        return value.length !== length ? { length } : null;
    };
};
