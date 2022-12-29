import { Pipe, PipeTransform } from '@angular/core';

import { Helper } from '@webilix/helper-library';
import { Validator } from '@webilix/validator-library';

@Pipe({ name: 'ngxMobile' })
export class NgxMobilePipe implements PipeTransform {
    transform(value: string): string {
        if (!Validator.VALUE.isString(value) || !Validator.STRING.isMobile(value)) return '';

        return Helper.STRING.getMobileView(value);
    }
}
