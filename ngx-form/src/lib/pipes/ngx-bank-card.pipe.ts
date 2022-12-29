import { Pipe, PipeTransform } from '@angular/core';
import { Helper } from '@webilix/helper-library';

import { Validator } from '@webilix/validator-library';

@Pipe({ name: 'ngxBankCard' })
export class NgxBankCardPipe implements PipeTransform {
    transform(value: string): string {
        if (!Validator.VALUE.isString(value) || !Validator.STRING.isBankCard(value)) return '';

        return Helper.STRING.getBankCardView(value);
    }
}
