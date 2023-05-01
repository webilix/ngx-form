import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputMask extends Omit<INgxFormInput, 'english'> {
    type: 'MASK';

    /**
     * Input caption copyright text
     * @type { string }
     * @override title
     */
    title: string;

    /**
     * Mask value
     * @type { string }
     */
    mask: string;

    /**
     * Icon text
     * @type { string }
     * @optional
     */
    icon?: string;
}

export class NgxFormInputMaskMethods extends NgxFormMethods<INgxFormInputMask, string | null> {
    control(input: INgxFormInputMask, validators: ValidatorFn[]): FormControl<string | null> {
        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Helper.IS.string(value) ? value : null;
    }
}
