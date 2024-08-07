import { ValidatorFn, FormControl } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { NgxPlateValidator } from '../validators';
import { INgxFormValues } from '../ngx-form.interface';

export interface INgxFormInputPlate
    extends Omit<INgxFormInput, 'id' | 'english' | 'value' | 'floatLabel' | 'keyboard'> {
    type: 'PLATE';

    /**
     * Input value
     * @type { [string, string, string, string] }
     * @override value
     * @optional
     */
    value?: [string, string, string, string];

    /**
     * Default plate letter
     * @type { string }
     * @optional
     */
    letter?: string;

    /**
     * Callback method after completing input value
     * @type { function(value): void }
     * @param { [string, string, string, string] } value input value
     * @optional
     */
    onComplete?: (value: [string, string, string, string]) => void;
}

export class NgxFormInputPlateMethods extends NgxFormMethods<INgxFormInputPlate, (string | null)[] | null> {
    control = (input: INgxFormInputPlate, validators: ValidatorFn[]): FormControl<(string | null)[] | null> => {
        input.title = input.title || 'شماره پلاک';
        if (input.letter && !Helper.PLATE.letters.includes(input.letter)) input.letter = undefined;
        validators.push(NgxPlateValidator(!input.optional));

        const value: (string | null)[] = Helper.PLATE.getPlate(input.value || []);
        return new FormControl<(string | null)[] | null>(value, validators);
    };

    value = (value: any): (string | null)[] | null => {
        const plate: (string | null)[] = Array.isArray(value)
            ? [0, 1, 2, 3].map((i) => (Helper.IS.string(value?.[i]) ? value?.[i] || null : null))
            : [null, null, null, null];
        return plate.includes(null) ? null : plate;
    };
}
