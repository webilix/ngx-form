import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { Helper } from 'helper-library';

@Pipe({ name: 'ngxError' })
export class NgxErrorPipe implements PipeTransform {
    transform(errors: ValidationErrors | null | undefined, type: string): string {
        if (errors === null || errors === undefined) return '';

        const keys: string[] = Object.keys(errors);
        if (keys.length === 0) return '';

        const error: string = keys[0];
        const value: any = errors[error];

        switch (error) {
            case 'required':
                return 'مقدار الزامی است.';

            case 'minlength':
                return `مقدار باید حداقل داری ${Helper.NUMBER.format(value.requiredLength)} کاراکتر باشد.`;

            case 'maxlength':
                return `مقدار می‌تواند حداکثر داری ${Helper.NUMBER.format(value.requiredLength)} کاراکتر باشد.`;

            case 'pattern':
                switch (type) {
                    case 'EMAIL':
                        return 'فرمت استاندارد ایمیل رعایت نشده است.';
                }
                break;
        }

        switch (type) {
            default:
                return 'مقدار وارد شده صحیح نیست.';
        }
    }
}
