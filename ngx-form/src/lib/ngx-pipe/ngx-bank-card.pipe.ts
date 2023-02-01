import { Pipe, PipeTransform } from '@angular/core';

import { Helper } from '@webilix/helper-library';

@Pipe({ name: 'ngxBankCard' })
export class NgxBankCardPipe implements PipeTransform {
    transform(value: string): string {
        if (!Helper.IS.string(value) || !Helper.IS.STRING.bankCard(value)) return '';

        return Helper.STRING.getBankCardView(value);
    }
}
