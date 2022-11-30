import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './numeric.component.html',
    styleUrls: ['./numeric.component.scss'],
})
export class NumericComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'numeric-1', type: 'NUMERIC', title: 'عبارت عددی', value: '0123456789' },
            {
                name: 'numeric-2',
                type: 'NUMERIC',
                title: 'محدودیت تعداد کاراکتر',
                optional: true,
                minLength: 5,
                maxLength: 10,
            },
            {
                name: 'numeric-3',
                type: 'NUMERIC',
                title: 'محدودیت طول ',
                optional: true,
                minLength: 5,
                maxLength: 5,
            },
            { name: 'numeric-4', type: 'NUMERIC', title: 'اختیاری', optional: true },
            {
                name: 'numeric-5',
                type: 'NUMERIC',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['numeric-4'] === '0123456789',
                hint: 'در صورتی که مقدار اختیاری 0123456789 باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'numeric-6',
                type: 'NUMERIC',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['numeric-4'] === '0123456789',
                hint: 'در صورتی که مقدار اختیاری 0123456789 باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
