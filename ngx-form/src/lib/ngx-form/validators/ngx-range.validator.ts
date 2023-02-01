import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

export const NgxRangeValidator = (required: boolean, equal: boolean, min?: number, max?: number): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const values: number[] = Array.isArray(formControl.value) ? formControl.value : [null, null];

        const minimum: number | null = Helper.IS.number(values[0]) ? values[0] : null;
        const maximum: number | null = Helper.IS.number(values[1]) ? values[1] : null;
        if (required && (minimum === null || maximum === null)) return { required: true };

        if (
            min !== undefined &&
            Helper.IS.number(min) &&
            ((minimum !== null && minimum < min) || (maximum !== null && maximum < min))
        )
            return { min: { min } };

        if (
            max !== undefined &&
            Helper.IS.number(max) &&
            ((minimum !== null && minimum > max) || (maximum !== null && maximum > max))
        )
            return { max: { max } };

        if (minimum !== null && maximum !== null && ((equal && minimum > maximum) || (!equal && minimum >= maximum)))
            return { range: { equal } };

        return null;
    };
};
