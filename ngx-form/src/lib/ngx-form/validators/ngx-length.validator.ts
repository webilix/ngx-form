import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

export const NgxLengthValidator = (length: number): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string = formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.string(value)) return null;

        return value.length !== length ? { length } : null;
    };
};
