import { Pipe, PipeTransform } from '@angular/core';

import { JalaliDateTime } from '@webilix/jalali-date-time';
import { Validator } from '@webilix/validator-library';

@Pipe({ name: 'ngxDate' })
export class NgxDatePipe implements PipeTransform {
    transform(value: string | Date | null, format?: string): string {
        if (value === null) return '';

        const jalali = JalaliDateTime({ fullTextFormat: format || 'W، d N Y' });
        const date: Date = typeof value === 'string' ? new Date(value) : value;
        if (!Validator.VALUE.isDate(date)) return '';

        return jalali.toFullText(date, { format: format || 'W، d N Y' });
    }
}
