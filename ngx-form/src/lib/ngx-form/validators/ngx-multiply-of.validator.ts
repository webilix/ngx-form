import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

export const NgxMultiplyOfValidator = <T>(multiplyOf: number): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: number = Helper.IS.string(formControl.value)
            ? +formControl.value.replace(/,/g, '')
            : formControl.value;
        if (Helper.IS.empty(value) || !Helper.IS.number(value)) return null;

        console.log(value, multiplyOf, value % multiplyOf);
        return value % multiplyOf === 0 ? null : { multiplyOf };
    };
};
