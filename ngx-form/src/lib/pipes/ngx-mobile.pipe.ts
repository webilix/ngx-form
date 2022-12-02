import { Pipe, PipeTransform } from '@angular/core';

import { Validator } from '@webilix/validator-library';

@Pipe({ name: 'ngxMobile' })
export class NgxMobilePipe implements PipeTransform {
    transform(value: string): string {
        if (!Validator.VALUE.isString(value) || !Validator.STRING.isMobile(value)) return '';

        return [value.substring(0, 4), value.substring(4, 7), value.substring(7)].join('-');
    }
}
