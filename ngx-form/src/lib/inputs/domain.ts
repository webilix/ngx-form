import { FormControl, ValidatorFn, Validators } from '@angular/forms';

import { RegX } from '@webilix/regex-library';

import { INgxFormInput, NgxFormMethods } from '../interfaces';

export interface INgxFormInputDomain extends Omit<INgxFormInput, 'english'> {
    type: 'DOMAIN';
}

export class NgxFormInputDomainMethods extends NgxFormMethods<INgxFormInputDomain, string | null> {
    control(input: INgxFormInputDomain, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'دامنه سایت';
        validators.push(Validators.pattern(RegX.DOMAIN.get()));

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return RegX.DOMAIN.verify(value) ? value : null;
    }
}
