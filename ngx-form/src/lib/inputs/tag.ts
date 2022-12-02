import { ValidatorFn, FormControl } from '@angular/forms';

import { Validator } from 'validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';
import { NgxMaxCountValidator, NgxMinCountValidator } from '../validators';

export interface INgxFormInputTag extends Omit<INgxFormInput, 'english' | 'value' | 'optional'> {
    type: 'TAG';
    value?: string[];
    tags: string[];
    minCount?: number;
    maxCount?: number;
}

export class NgxFormInputTagMethods extends NgxFormInputMethods<INgxFormInputTag, string[] | null> {
    control(input: INgxFormInputTag, validators: ValidatorFn[]): FormControl<string[] | null> {
        input.title = input.title || 'تگ';
        if (input.minCount) validators.push(NgxMinCountValidator<string>(input.minCount));
        if (input.maxCount) validators.push(NgxMaxCountValidator<string>(input.maxCount));

        const value: string[] = (Array.isArray(input.value) ? input.value : []).filter(
            (value: string) => Validator.VALUE.isString(value) && value.length > 0,
        );
        return new FormControl<string[] | null>(value, validators);
    }

    value(value: any): string[] | null {
        return Array.isArray(value) ? value : [];
    }
}
