import { FormControl, ValidatorFn } from '@angular/forms';

import { INgxFormInput, NgxFormMethods } from '../interfaces';

export interface INgxFormInputFile extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'FILE';

    /**
     * Acceptable file mime types
     * @type { Array<string> }
     * @optional
     */
    mimes?: string[];
}

export class NgxFormInputFileMethods extends NgxFormMethods<INgxFormInputFile, File | null> {
    control(input: INgxFormInputFile, validators: ValidatorFn[]): FormControl<File | null> {
        input.title = input.title || 'فایل';
        return new FormControl<File | null>(null, validators);
    }

    value(value: any): File | null {
        return value || null;
    }
}
