import { FormControl, ValidatorFn } from '@angular/forms';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';

export interface INgxFormInputComment extends Omit<INgxFormInput, 'optional' | 'disableOn'> {
    type: 'COMMENT';
    title: string;
    value: string;
}

export class NgxFormInputCommentMethods extends NgxFormInputMethods<INgxFormInputComment, string | null> {
    control(input: INgxFormInputComment, validators: ValidatorFn[]): FormControl<string | null> {
        return new FormControl<string | null>(input.value, validators);
    }

    value(value: any): string | null {
        return value;
    }
}
