import { FormControl, ValidatorFn } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { NgxBankCardValidator } from '../validators';

export interface INgxFormInputBankCard extends Omit<INgxFormInput, 'english'> {
    type: 'BANK-CARD';
}

export class NgxFormInputBankCardMethods extends NgxFormMethods<INgxFormInputBankCard, string | null> {
    control(input: INgxFormInputBankCard, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'شماره کارت بانکی';
        validators.push(NgxBankCardValidator());

        return new FormControl<string | null>(input.value || null, validators);
    }

    value(value: any): string | null {
        return Validator.VALUE.isString(value) && Validator.STRING.isBankCard(value) ? value : null;
    }
}
