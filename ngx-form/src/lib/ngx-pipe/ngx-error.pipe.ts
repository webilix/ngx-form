import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

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

            case 'minimum':
                return `مقدار نمی‌تواند کوچکتر از ${Helper.NUMBER.format(value)} باشد.`;

            case 'maximum':
                return `مقدار نمی‌تواند بزرگتر از ${Helper.NUMBER.format(value)} باشد.`;

            case 'length':
                return `مقدار باید داری ${Helper.NUMBER.format(value)} کاراکتر باشد.`;

            case 'minlength':
                return `مقدار باید حداقل داری ${Helper.NUMBER.format(value.requiredLength)} کاراکتر باشد.`;

            case 'maxlength':
                return `مقدار می‌تواند حداکثر داری ${Helper.NUMBER.format(value.requiredLength)} کاراکتر باشد.`;

            case 'min-count':
                return `انتخاب حداقل ${Helper.NUMBER.format(value)} گزینه الزامی است.`;

            case 'max-count':
                return `امکان انتخاب بیشتر از ${Helper.NUMBER.format(value)} گزینه وجود ندارد.`;

            case 'min-date':
                return `تاریخ باید برابر یا بعد از ${value} انتخاب شده باشد.`;

            case 'max-date':
                return `تاریخ باید برابر یا قبل از ${value} انتخاب شده باشد.`;

            case 'bank-card':
                return `شماره کارت بانکی صحیح مشخص نشده است.`;

            case 'national-code':
                return `کد ملی صحیح مشخص نشده است.`;

            case 'duplicate':
                return 'امکان انتخاب مقادیر تکراری وجود ندارد.';

            case 'period':
                return `تاریخ شروع باید ${value.equal ? 'قبل یا برابر با' : 'قبل از'} تاریخ پایان باشد.`;

            case 'plate':
                return `شماره پلاک به صورت کامل مشخص نشده است.`;

            case 'range':
                return `حداقل مقدار باید ${value.equal ? 'کوچکتر یا برابر با' : 'کوچکتر از'} حداکثر مقدار باشد.`;

            case 'pattern':
                switch (type) {
                    case 'EMAIL':
                        return 'فرمت استاندارد ایمیل رعایت نشده است.';
                    case 'IP':
                        return 'فرمت استاندارد آدرس آی‌پی رعایت نشده است.';
                    case 'NUMERIC':
                        return 'کاراکترهای مجاز: اعداد انگلیسی';
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
                    case 'URL':
                        return 'فرمت استاندارد آدرس سایت رعایت نشده است.';
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
                        return 'شماره موبایل دارای ۱۱ رقم است.';
                    case 'NATIONAL-CODE':
                        return 'کدملی دارای ۱۰ رقم است.';
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
