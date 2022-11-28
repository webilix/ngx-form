import { FormControl, ValidatorFn } from '@angular/forms';

import { INgxFormInput } from '../interfaces/ngx-input';
import { INgxFormOption } from '../interfaces/ngx-option';
import { NgxFormInputMethods } from '../ngx-form.methods';
import { NgxMaxCountValidator, NgxMinCountValidator } from '../validators';

export interface INgxFormInputMultiSelect extends Omit<INgxFormInput, 'value' | 'optional'> {
    type: 'MULTI-SELECT';
    title: string;
    value?: string[];
    options: INgxFormOption[];
    minCount?: number;
    maxCount?: number;
    view?: 'CHECKBOX' | 'SELECT' | 'TAG';
}

export class NgxFormInputMultiSelectMethods extends NgxFormInputMethods<INgxFormInputMultiSelect, string[] | null> {
    control(input: INgxFormInputMultiSelect, validators: ValidatorFn[]): FormControl<string[] | null> {
        const options: string[] = input.options.map((option) => option.id);
        const value: string[] = (input.value || []).filter((value: string) => options.includes(value));
        if (input.minCount) validators.push(NgxMinCountValidator<string>(input.minCount));
        if (input.maxCount) validators.push(NgxMaxCountValidator<string>(input.maxCount));

        return new FormControl<string[] | null>(value, validators);
    }

    value(value: any, input: INgxFormInputMultiSelect): string[] | null {
        const options: string[] = input.options.map((option) => option.id);
        return Array.isArray(value) ? value.filter((v: string) => options.includes(v)) : [];
    }
}
