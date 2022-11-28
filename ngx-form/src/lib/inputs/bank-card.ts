import { FormControl, ValidatorFn } from '@angular/forms';

import { Validator } from 'validator-library';

import { INgxFormInput } from '../interfaces/ngx-input';
import { NgxFormInputMethods } from '../ngx-form.methods';
import { NgxBankCardValidator } from '../validators';

export interface INgxFormInputBankCard extends Omit<INgxFormInput, 'english'> {
    type: 'BANK-CARD';
}

export class NgxFormInputBankCard extends NgxFormInputMethods<INgxFormInputBankCard, string | null> {
    control(input: INgxFormInputBankCard, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'شماره کارت بانکی';
        validators.push(NgxBankCardValidator());

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Validator.VALUE.isString(value) && Validator.STRING.isBankCard(value) ? value : null;
    }
}
