import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const NgxDuplicateValidator = <T>(callback: (value: T) => string): ValidatorFn => {
    return (formControl: AbstractControl): ValidationErrors | null => {
        const values: T[] = Array.isArray(formControl.value) ? formControl.value : [];
        const check: string[] = values.map((value: T) => callback(value));
        const unique: string[] = check.filter((v: string, i: number, a: string[]) => a.indexOf(v) === i);

        return check.length !== unique.length ? { duplicate: true } : null;
    };
};
