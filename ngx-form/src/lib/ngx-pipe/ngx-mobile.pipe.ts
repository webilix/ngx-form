import { Pipe, PipeTransform } from '@angular/core';

import { Helper } from '@webilix/helper-library';

@Pipe({ name: 'ngxMobile' })
export class NgxMobilePipe implements PipeTransform {
    transform(value: string): string {
        if (!Helper.IS.string(value) || !Helper.IS.STRING.mobile(value)) return '';

        return Helper.STRING.getMobileView(value);
    }
}
