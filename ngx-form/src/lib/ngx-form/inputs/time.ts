import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputTime extends Omit<INgxFormInput, 'english' | 'autoFocus'> {
    type: 'TIME';

    /**
     * Active second option
     * @type { boolean }
     * @optional false
     */
    second?: boolean;
}

export class NgxFormInputTimeMethods extends NgxFormMethods<INgxFormInputTime, string | null> {
    control(input: INgxFormInputTime, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'ساعت';
        validators.push(Validators.pattern(Helper.RE.TIME.get()));

        const value: string | null =
            input.value === undefined ? null : Helper.RE.TIME.verify(input.value) ? input.value : null;
        return new FormControl<string | null>(value, validators);
    }

    value(value: any): string | null {
        return Helper.RE.TIME.verify(value) ? value : null;
    }
}
