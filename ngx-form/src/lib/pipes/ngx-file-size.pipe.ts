import { Pipe, PipeTransform } from '@angular/core';

import { Helper } from '@webilix/helper-library';
import { Validator } from '@webilix/validator-library';

@Pipe({ name: 'ngxFileSize' })
export class NgxFileSizePipe implements PipeTransform {
    transform(value: number): string {
        if (!Validator.VALUE.isNumber(value)) return '';

        return Helper.NUMBER.toFileSize(value);
    }
}
