import { FormControl, ValidatorFn } from '@angular/forms';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputCheckbox
    extends Omit<INgxFormInput, 'id' | 'title' | 'value' | 'optional' | 'autoFocus' | 'floatLabel' | 'keyboard'> {
    type: 'CHECKBOX';

    /**
     * Checkbox copyright message
     * @type { string }
     */
    message: string;

    /**
     * Input value
     * @type { boolean }
     * @optional
     */
    value?: boolean;

    /**
     * Input view method
     * @type { string }
     * @enum 'CHECKBOX', 'SLIDER'
     * @optional CHECKBOX
     */
    view?: 'CHECKBOX' | 'SLIDER';
}

export class NgxFormInputCheckboxMethods extends NgxFormMethods<INgxFormInputCheckbox, boolean | null> {
    control(input: INgxFormInputCheckbox, validators: ValidatorFn[]): FormControl<boolean | null> {
        return new FormControl<boolean | null>(!!input.value, validators);
    }

    value(value: any): boolean | null {
        return !!value;
    }
}
