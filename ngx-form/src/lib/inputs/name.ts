import { FormControl, ValidatorFn } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { INgxFormName } from '../interfaces/ngx-name';
import { NgxFormInputMethods } from '../ngx-form.methods';

export interface INgxFormInputName extends Omit<INgxFormInput, 'title' | 'value' | 'english'> {
    type: 'NAME';

    /**
     * Input Value
     * @type { INgxFormName }
     * @override value
     * @optional
     */
    value?: INgxFormName;
}

export class NgxFormInputNameMethods extends NgxFormInputMethods<INgxFormInputName, INgxFormName | null> {
    control(input: INgxFormInputName, validators: ValidatorFn[]): FormControl<INgxFormName | null> {
        const value: INgxFormName | null =
            Validator.VALUE.isObject(input.value) && input.value && input.value.first && input.value.last
                ? input.value
                : null;
        return new FormControl<INgxFormName | null>(value, validators);
    }

    value(value: any): INgxFormName | null {
        return Validator.VALUE.isObject(value) ? value : null;
    }
}
