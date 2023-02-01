import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

export const NgxBankCardValidator = (): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string = formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.string(value) || value.length !== 16) return null;

        return !Helper.IS.STRING.bankCard(value) ? { 'bank-card': true } : null;
    };
};
