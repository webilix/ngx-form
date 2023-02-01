import { Pipe, PipeTransform } from '@angular/core';

import { Helper } from '@webilix/helper-library';

@Pipe({ name: 'ngxFileSize' })
export class NgxFileSizePipe implements PipeTransform {
    transform(value: number): string {
        if (!Helper.IS.number(value)) return '';

        return Helper.NUMBER.toFileSize(value);
    }
}
