import { FormControl, ValidatorFn } from '@angular/forms';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';

export interface INgxFormInputCheckbox extends Omit<INgxFormInput, 'title' | 'value' | 'optional'> {
    type: 'CHECKBOX';
    message: string;
    value?: boolean;
}

export class NgxFormInputCheckboxMethods extends NgxFormInputMethods<INgxFormInputCheckbox, boolean | null> {
    control(input: INgxFormInputCheckbox, validators: ValidatorFn[]): FormControl<boolean | null> {
        return new FormControl<boolean | null>(!!input.value, validators);
    }

    value(value: any): boolean | null {
        return !!value;
    }
}
