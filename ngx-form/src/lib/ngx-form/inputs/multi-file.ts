import { FormControl, ValidatorFn } from '@angular/forms';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { NgxDuplicateValidator, NgxMaxCountValidator, NgxMinCountValidator } from '../validators';

export interface INgxFormInputMultiFile extends Omit<INgxFormInput, 'english' | 'value' | 'optional'> {
    type: 'MULTI-FILE';

    /**
     * Acceptable file mime types
     * @type { Array<string> }
     * @optional
     */
    mimes?: string[];

    /**
     * Minimum number of required selected files
     * @type { number }
     * @optional
     */
    minCount?: number;

    /**
     * Maximum number of acceptable selected files
     * @type { number }
     * @optional
     */
    maxCount?: number;
}

export class NgxFormInputMultiFileMethods extends NgxFormMethods<INgxFormInputMultiFile, File[] | null> {
    control(input: INgxFormInputMultiFile, validators: ValidatorFn[]): FormControl<File[] | null> {
        input.title = input.title || 'فایل‌ها';
        validators.push(
            NgxDuplicateValidator<File>((value: File) => `value.name::${value.size}::${value.lastModified}`),
        );

        if (input.minCount) validators.push(NgxMinCountValidator<File>(input.minCount));
        if (input.maxCount) validators.push(NgxMaxCountValidator<File>(input.maxCount));

        return new FormControl<File[] | null>([], validators);
    }

    value(value: any): File[] | null {
        return Array.isArray(value) ? value : [];
    }
}
