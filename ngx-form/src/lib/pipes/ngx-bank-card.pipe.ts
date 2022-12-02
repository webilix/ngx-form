import { Pipe, PipeTransform } from '@angular/core';

import { Validator } from '@webilix/validator-library';

@Pipe({ name: 'ngxBankCard' })
export class NgxBankCardPipe implements PipeTransform {
    transform(value: string): string {
        if (!Validator.VALUE.isString(value) || !Validator.STRING.isBankCard(value)) return '';

        return [value.substring(0, 4), value.substring(4, 8), value.substring(8, 12), value.substring(12)].join('-');
    }
}
