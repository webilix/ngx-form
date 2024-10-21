import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper, UnitLength } from '@webilix/helper-library';

import { NgxFormMethods } from '../../classes';
import { INgxFormInput, INgxFormUnitLength } from '../../interfaces';
import { NgxMaxUnitValidator, NgxMinUnitValidator } from '../../validators';

export interface INgxFormInputUnitLength extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'UNIT-LENGTH';

    /**
     * Input value
     * @type { INgxFormUnitLength }
     * @override value
     * @optional
     */
    value?: INgxFormUnitLength;

    /**
     * Default unit type if value is not specified
     * @type { UnitLength }
     * @optional MT
     */
    unit?: UnitLength;

    /**
     * Minimum acceptable value
     * @type { number }
     * @optional
     */
    minimum?: number;

    /**
     * Maximum acceptable value
     * @type { number }
     * @optional
     */
    maximum?: number;

    /**
     * Accept decimal values
     * @type { boolean | number }
     * @optional false
     */
    decimal?: boolean | number;
}

export class NgxFormInputUnitLengthMethods extends NgxFormMethods<INgxFormInputUnitLength, INgxFormUnitLength | null> {
    control(input: INgxFormInputUnitLength, validators: ValidatorFn[]): FormControl<INgxFormUnitLength | null> {
        input.title = input.title || 'طول';

        if (input.minimum) validators.push(NgxMinUnitValidator(input.minimum));
        if (input.maximum) validators.push(NgxMaxUnitValidator(input.maximum));

        const value: INgxFormUnitLength | null =
            input.value === undefined
                ? null
                : input.value !== null &&
                  Helper.IS.object(input.value) &&
                  Helper.UNIT.LENGTH.list.includes(input.value.unit) &&
                  Helper.IS.number(input.value.value)
                ? input.value
                : null;
        return new FormControl<INgxFormUnitLength | null>(value, validators);
    }

    value(value: any): INgxFormUnitLength | null {
        if (Helper.IS.empty(value)) return null;

        return value !== null &&
            Helper.IS.object(value) &&
            Helper.UNIT.LENGTH.list.includes(value.unit) &&
            Helper.IS.number(value.value)
            ? value
            : null;
    }
}
