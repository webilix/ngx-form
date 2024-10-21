import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper, UnitWeight } from '@webilix/helper-library';

import { NgxFormMethods } from '../../classes';
import { INgxFormInput, INgxFormUnitWeight } from '../../interfaces';
import { NgxMaxUnitValidator, NgxMinUnitValidator } from '../../validators';

export interface INgxFormInputUnitWeight extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'UNIT-WEIGHT';

    /**
     * Input value
     * @type { INgxFormUnitWeight }
     * @override value
     * @optional
     */
    value?: INgxFormUnitWeight;

    /**
     * Default unit type if value is not specified
     * @type { UnitWeight }
     * @optional KG
     */
    unit?: UnitWeight;

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

export class NgxFormInputUnitWeightMethods extends NgxFormMethods<INgxFormInputUnitWeight, INgxFormUnitWeight | null> {
    control(input: INgxFormInputUnitWeight, validators: ValidatorFn[]): FormControl<INgxFormUnitWeight | null> {
        input.title = input.title || 'وزن';

        if (input.minimum) validators.push(NgxMinUnitValidator(input.minimum));
        if (input.maximum) validators.push(NgxMaxUnitValidator(input.maximum));

        const value: INgxFormUnitWeight | null =
            input.value === undefined
                ? null
                : input.value !== null &&
                  Helper.IS.object(input.value) &&
                  Helper.UNIT.WEIGHT.list.includes(input.value.unit) &&
                  Helper.IS.number(input.value.value)
                ? input.value
                : null;
        return new FormControl<INgxFormUnitWeight | null>(value, validators);
    }

    value(value: any): INgxFormUnitWeight | null {
        if (Helper.IS.empty(value)) return null;

        return value !== null &&
            Helper.IS.object(value) &&
            Helper.UNIT.WEIGHT.list.includes(value.unit) &&
            Helper.IS.number(value.value)
            ? value
            : null;
    }
}
