import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormCoordinates, INgxFormInput } from '../interfaces';

export interface INgxFormInputCoordinates extends Omit<INgxFormInput, 'english' | 'value' | 'autoFocus'> {
    type: 'COORDINATES';

    /**
     * Input value
     * @type { INgxFormCoordinates }
     * @override value
     * @optional
     */
    value?: INgxFormCoordinates;

    /**
     * Map's default center, if value is not specified
     * @type { INgxFormCoordinates }
     * @optional
     */
    center?: INgxFormCoordinates;

    /**
     * Map's default zoom
     * @type { Number }
     * @optional 15
     */
    zoom?: number;
}

export class NgxFormInputCoordinatesMethods extends NgxFormMethods<
    INgxFormInputCoordinates,
    INgxFormCoordinates | null
> {
    control(input: INgxFormInputCoordinates, validators: ValidatorFn[]): FormControl<INgxFormCoordinates | null> {
        input.title = input.title || 'موقعیت جغرافیایی';

        let value: INgxFormCoordinates | null =
            input.value === undefined
                ? null
                : input.value !== null &&
                  Helper.IS.object(input.value) &&
                  Helper.IS.number(input.value.latitude) &&
                  Helper.IS.number(input.value.longitude)
                ? input.value
                : null;
        return new FormControl<INgxFormCoordinates | null>(value, validators);
    }

    value(value: any): INgxFormCoordinates | null {
        return value !== null &&
            Helper.IS.object(value) &&
            Helper.IS.number(value.latitude) &&
            Helper.IS.number(value.longitude)
            ? value
            : null;
    }
}
