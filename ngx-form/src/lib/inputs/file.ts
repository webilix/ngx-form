import { FormControl, ValidatorFn } from '@angular/forms';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';

export interface INgxFormInputFile extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'FILE';
    mimes?: string[];
}

export class NgxFormInputFileMethods extends NgxFormInputMethods<INgxFormInputFile, File | null> {
    control(input: INgxFormInputFile, validators: ValidatorFn[]): FormControl<File | null> {
        input.title = input.title || 'فایل';
        return new FormControl<File | null>(null, validators);
    }

    value(value: any): File | null {
        return value || null;
    }
}
