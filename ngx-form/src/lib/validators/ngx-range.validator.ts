import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Validator } from 'validator-library';

export const NgxRangeValidator = (required: boolean, equal: boolean, min?: number, max?: number): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const values: number[] = Array.isArray(formControl.value) ? formControl.value : [null, null];

        const minimum: number | null = Validator.VALUE.isNumber(values[0]) ? values[0] : null;
        const maximum: number | null = Validator.VALUE.isNumber(values[1]) ? values[1] : null;
        if (required && (minimum === null || maximum === null)) return { required: true };

        if (
            min !== undefined &&
            Validator.VALUE.isNumber(min) &&
            ((minimum !== null && minimum < min) || (maximum !== null && maximum < min))
        )
            return { min: { min } };

        if (
            max !== undefined &&
            Validator.VALUE.isNumber(max) &&
            ((minimum !== null && minimum > max) || (maximum !== null && maximum > max))
        )
            return { max: { max } };

        if (minimum !== null && maximum !== null && ((equal && minimum > maximum) || (!equal && minimum >= maximum)))
            return { range: { equal } };

        return null;
    };
};
