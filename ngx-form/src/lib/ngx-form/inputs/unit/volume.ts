import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper, UnitVolume } from '@webilix/helper-library';

import { NgxFormMethods } from '../../classes';
import { INgxFormInput, INgxFormUnitVolume } from '../../interfaces';
import { NgxMaxUnitValidator, NgxMinUnitValidator } from '../../validators';

export interface INgxFormInputUnitVolume extends Omit<INgxFormInput, 'english' | 'value'> {
    type: 'UNIT-VOLUME';

    /**
     * Input value
     * @type { INgxFormUnitVolume }
     * @override value
     * @optional
     */
    value?: INgxFormUnitVolume;

    /**
     * Default unit type if value is not specified
     * @type { UnitVolume }
     * @optional LT
     */
    unit?: UnitVolume;

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

export class NgxFormInputUnitVolumeMethods extends NgxFormMethods<INgxFormInputUnitVolume, INgxFormUnitVolume | null> {
    control(input: INgxFormInputUnitVolume, validators: ValidatorFn[]): FormControl<INgxFormUnitVolume | null> {
        input.title = input.title || 'حجم';

        if (input.minimum) validators.push(NgxMinUnitValidator(input.minimum));
        if (input.maximum) validators.push(NgxMaxUnitValidator(input.maximum));

        const value: INgxFormUnitVolume | null =
            input.value === undefined
                ? null
                : input.value !== null &&
                  Helper.IS.object(input.value) &&
                  Helper.UNIT.VOLUME.list.includes(input.value.unit) &&
                  Helper.IS.number(input.value.value)
                ? input.value
                : null;
        return new FormControl<INgxFormUnitVolume | null>(value, validators);
    }

    value(value: any): INgxFormUnitVolume | null {
        if (Helper.IS.empty(value)) return null;

        return value !== null &&
            Helper.IS.object(value) &&
            Helper.UNIT.VOLUME.list.includes(value.unit) &&
            Helper.IS.number(value.value)
            ? value
            : null;
    }
}
