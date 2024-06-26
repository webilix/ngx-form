import { FormControl, ValidatorFn } from '@angular/forms';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputFile extends Omit<INgxFormInput, 'id' | 'english' | 'value' | 'autoFocus' | 'keyboard'> {
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
