import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';
import { Validator } from '@webilix/validator-library';

export const NgxPlateValidator = (required: boolean): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const value: string[] = Array.isArray(formControl.value) ? formControl.value : [null, null, null, null];
        const left: string | null = Validator.STRING.isNumeric(value[0]) && value[0].length == 2 ? value[0] : null;
        const letter: string | null =
            Validator.VALUE.isString(value[1]) && Helper.PLATE.letters.includes(value[1]) ? value[1] : null;
        const right: string | null = Validator.STRING.isNumeric(value[2]) && value[2].length == 3 ? value[2] : null;
        const iran: string | null = Validator.STRING.isNumeric(value[3]) && value[3].length == 2 ? value[3] : null;
        const values: string[] = [left, letter, right, iran].filter((value) => value !== null) as string[];

        if (required && values.length === 0) return { required: true };
        return values.length !== 0 && values.length < 4 ? { plate: true } : null;
    };
};
