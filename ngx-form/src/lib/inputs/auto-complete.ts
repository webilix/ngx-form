import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';

/**
 * AUTO-COMPLETE input interface
 */
export interface INgxFormInputAutoComplete extends INgxFormInput {
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

export class NgxFormInputAutoCompleteMethods extends NgxFormInputMethods<INgxFormInputAutoComplete, string | null> {
    control(input: INgxFormInputAutoComplete, validators: ValidatorFn[]): FormControl<string | null> {
        input.options = input.options.sort((o1: string, o2: string) => o1.localeCompare(o2));
        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Validator.VALUE.isString(value) && value !== '' ? value : null;
    }
}
