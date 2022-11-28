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

            case 'min':
                return `مقدار نمی‌تواند کوچکتر از ${Helper.NUMBER.format(value.min)} باشد.`;

            case 'max':
                return `مقدار نمی‌تواند بزرگتر از ${Helper.NUMBER.format(value.max)} باشد.`;

            case 'minlength':
                return `مقدار باید حداقل داری ${Helper.NUMBER.format(value.requiredLength)} کاراکتر باشد.`;

            case 'maxlength':
                return `مقدار می‌تواند حداکثر داری ${Helper.NUMBER.format(value.requiredLength)} کاراکتر باشد.`;

            case 'min-count':
                return `انتخاب حداقل ${Helper.NUMBER.format(value)} گزینه الزامی است.`;

            case 'max-count':
                return `امکان انتخاب بیشتر از ${Helper.NUMBER.format(value)} گزینه وجود ندارد.`;

            case 'bank-card':
                return `شماره کارت بانکی صحیح مشخص نشده است.`;

            case 'pattern':
                switch (type) {
                    case 'EMAIL':
                        return 'فرمت استاندارد ایمیل رعایت نشده است.';
                    case 'PASSWORD':
                        switch (true) {
                            case value.requiredPattern.includes('[0-9]'):
                                return 'مقدار باید شامل اعداد انگلیسی باشد.';
                            case value.requiredPattern.includes('[a-z]'):
                                return 'مقدار باید شامل حروف انگلیسی کوچک باشد.';
                            case value.requiredPattern.includes('[A-Z]'):
                                return 'مقدار باید شامل حروف انگلیسی بزرگ باشد.';
                        }
                        return 'کاراکترهای الزامی در کلمه عبور استفاده نشده‌اند.';
                    case 'USERNAME':
                        switch (value.requiredPattern) {
                            case '/[a-z]{1}$/':
                                return 'نام کاربری باید با حروف انگلیسی کوچک تمام شود.';
                            case '/^[a-z]{1}/':
                                return 'نام کاربری باید با حروف انگلیسی کوچک شروع شود.';
                            default:
                                const pattern: string = value.requiredPattern.replace('a-z0-9', '');
                                const chars: string[] = ['حروف انگلیسی کوچک', 'اعداد انگلیسی'];
                                if (pattern.includes('-')) chars.push('منها (-)');
                                if (pattern.includes('.')) chars.push('نقطه (.)');
                                return `کاراکترهای مجاز: ${chars.join('، ')}`;
                        }
                }
                break;

            case 'mask':
                switch (type) {
                    case 'BANK-CARD':
                        return 'شماره کارت بانکی دارای ۱۶ رقم است.';
                    case 'MOBILE':
                        return 'شماره موبایل کامل مشخص نشده است.';
                }
                break;
        }

        switch (type) {
            case 'DOMAIN':
                return 'فرمت استاندارد دامنه سایت رعایت نشده است.';
            default:
                return 'مقدار وارد شده صحیح نیست.';
        }
    }
}
