import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput, INgxFormName } from '../interfaces';

export interface INgxFormInputName extends Omit<INgxFormInput, 'value' | 'english' | 'floatLabel'> {
    type: 'NAME';

    /**
     * Input Value
     * @type { INgxFormName }
     * @override value
     * @optional
     */
    value?: INgxFormName;
}

export class NgxFormInputNameMethods extends NgxFormMethods<INgxFormInputName, INgxFormName | null> {
    control(input: INgxFormInputName, validators: ValidatorFn[]): FormControl<INgxFormName | null> {
        const value: INgxFormName | null =
            Helper.IS.object(input.value) && input.value && input.value.first && input.value.last ? input.value : null;
        return new FormControl<INgxFormName | null>(value, validators);
    }

    value(value: any): INgxFormName | null {
        return Helper.IS.object(value) ? value : null;
    }
}
