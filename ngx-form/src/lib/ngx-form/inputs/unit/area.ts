import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper, UnitArea } from '@webilix/helper-library';

import { NgxFormMethods } from '../../classes';
import { INgxFormInput, INgxFormUnitArea } from '../../interfaces';
import { NgxMaxUnitValidator, NgxMinUnitValidator } from '../../validators';

export interface INgxFormInputUnitArea extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'UNIT-AREA';

    /**
     * Input value
     * @type { INgxFormUnitArea }
     * @override value
     * @optional
     */
    value?: INgxFormUnitArea;

    /**
     * Default unit type if value is not specified
     * @type { UnitArea }
     * @optional MT
     */
    unit?: UnitArea;

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

export class NgxFormInputUnitAreaMethods extends NgxFormMethods<INgxFormInputUnitArea, INgxFormUnitArea | null> {
    control(input: INgxFormInputUnitArea, validators: ValidatorFn[]): FormControl<INgxFormUnitArea | null> {
        input.title = input.title || 'مساحت';

        if (input.minimum) validators.push(NgxMinUnitValidator(input.minimum));
        if (input.maximum) validators.push(NgxMaxUnitValidator(input.maximum));

        const value: INgxFormUnitArea | null =
            input.value === undefined
                ? null
                : input.value !== null &&
                  Helper.IS.object(input.value) &&
                  Helper.UNIT.AREA.list.includes(input.value.unit) &&
                  Helper.IS.number(input.value.value)
                ? input.value
                : null;
        return new FormControl<INgxFormUnitArea | null>(value, validators);
    }

    value(value: any): INgxFormUnitArea | null {
        if (Helper.IS.empty(value)) return null;

        return value !== null &&
            Helper.IS.object(value) &&
            Helper.UNIT.AREA.list.includes(value.unit) &&
            Helper.IS.number(value.value)
            ? value
            : null;
    }
}
