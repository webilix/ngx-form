import { ValidatorFn, FormControl } from '@angular/forms';

import { NgxFormMethods } from '../classes';
import { INgxFormInput, INgxFormOption } from '../interfaces';

export interface INgxFormInputSelect extends INgxFormInput {
    type: 'SELECT';

    /**
     * Input caption copyright text
     * @type { string }
     * @override title
     */
    title: string;

    /**
     * Input options list
     * @type { Array<INgxFormOption> }
     */
    options: INgxFormOption[];
}

export class NgxFormInputSelectMethods extends NgxFormMethods<INgxFormInputSelect, string | null> {
    control(input: INgxFormInputSelect, validators: ValidatorFn[]): FormControl<string | null> {
        const value: string | null =
            input.value && input.options.find((o) => o.id === input.value) ? input.value : null;

        return new FormControl<string | null>(value, validators);
    }

    value(value: any, input: INgxFormInputSelect): string | null {
        return value && input.options.find((o) => o.id === value) ? value : null;
    }
}
