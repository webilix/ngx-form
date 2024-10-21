import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

export const NgxMinUnitValidator = <T>(minimum: number): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: { unit: string; value: number } = formControl.value;
        if (Helper.IS.empty(value)) return null;

        return value.value >= minimum ? null : { minimum };
    };
};
