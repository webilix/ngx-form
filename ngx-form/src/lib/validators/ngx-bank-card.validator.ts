import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Validator } from 'validator-library';

export const NgxBankCardValidator = (): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string = formControl.value;
        if (Validator.VALUE.isEmpty(value) || !Validator.VALUE.isString(value) || value.length !== 16) return null;

        return !Validator.STRING.isBankCard(value) ? { 'bank-card': true } : null;
    };
};
