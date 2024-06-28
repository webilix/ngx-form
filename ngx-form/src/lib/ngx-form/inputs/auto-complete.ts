import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

/**
 * AUTO-COMPLETE input interface
 */
export interface INgxFormInputAutoComplete extends Omit<INgxFormInput, 'id' | 'autoFocus' | 'keyboard'> {
    type: 'AUTO-COMPLETE';

    /**
     * Input caption copyright text
     * @type { string }
     * @override title
     */
    title: string;

    /**
     * Input options
     * @type { Array<string> }
     */
    options: string[];
}

export class NgxFormInputAutoCompleteMethods extends NgxFormMethods<INgxFormInputAutoComplete, string | null> {
    control(input: INgxFormInputAutoComplete, validators: ValidatorFn[]): FormControl<string | null> {
        input.options = input.options.sort((o1: string, o2: string) => o1.localeCompare(o2));
        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Helper.IS.string(value) && value !== '' ? value : null;
    }
}
