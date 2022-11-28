import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './mobile.component.html',
    styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'mobile-1', type: 'MOBILE', value: '09123456789' },
            { name: 'mobile-2', type: 'MOBILE', title: 'اختیاری', optional: true },
            {
                name: 'mobile-3',
                type: 'MOBILE',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['mobile-2'] === '09123456789',
                hint: 'در صورتی که مقدار اختیاری 09123456789 باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'mobile-4',
                type: 'MOBILE',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['mobile-2'] === '09123456789',
                hint: 'در صورتی که مقدار اختیاری 09123456789 باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
