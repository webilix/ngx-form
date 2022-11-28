import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const NgxMinCountValidator = <T>(count: number): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const values: T[] = Array.isArray(formControl.value) ? formControl.value : [];
        return values.length >= count ? null : { 'min-count': count };
    };
};
