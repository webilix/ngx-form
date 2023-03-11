import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputDomain extends Omit<INgxFormInput, 'english'> {
    type: 'DOMAIN';
}

export class NgxFormInputDomainMethods extends NgxFormMethods<INgxFormInputDomain, string | null> {
    control(input: INgxFormInputDomain, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'دامنه سایت';
        validators.push(Validators.pattern(Helper.RE.DOMAIN.get()));

        const value: string | null =
            input.value === undefined ? null : Helper.RE.DOMAIN.verify(input.value) ? input.value : null;
        return new FormControl<string | null>(value, validators);
    }

    value(value: any): string | null {
        return Helper.RE.DOMAIN.verify(value) ? value : null;
    }
}
