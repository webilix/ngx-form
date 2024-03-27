import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

export const NgxPatternValidator = (pattern: RegExp, error: string | null): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string = formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.string(value)) return null;

        return pattern.test(value) ? null : { pattern: { pattern, error } };
    };
};
