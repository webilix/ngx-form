import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';
import { Validator } from '@webilix/validator-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { NgxPlateValidator } from '../validators';

export interface INgxFormInputPlate extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'PLATE';

    /**
     * Input value
     * @type { [string, string, string, string] }
     * @override value
     * @optional
     */
    value?: [string, string, string, string];
}

export class NgxFormInputPlateMethods extends NgxFormMethods<INgxFormInputPlate, (string | null)[] | null> {
    control = (input: INgxFormInputPlate, validators: ValidatorFn[]): FormControl<(string | null)[] | null> => {
        input.title = input.title || 'شماره پلاک';
        validators.push(NgxPlateValidator(!input.optional));

        const value: (string | null)[] = Helper.PLATE.getPlate(input.value || []);
        return new FormControl<(string | null)[] | null>(value, validators);
    };

    value = (value: any): (string | null)[] | null => {
        const plate: (string | null)[] = Array.isArray(value)
            ? [0, 1, 2, 3].map((i) => (Validator.VALUE.isString(value?.[i]) ? value?.[i] || null : null))
            : [null, null, null, null];
        return plate.includes(null) ? null : plate;
    };
}
