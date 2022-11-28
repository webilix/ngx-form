import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './number.component.html',
    styleUrls: ['./number.component.scss'],
})
export class NumberComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'number-1', type: 'NUMBER', title: 'مقدار عددی', value: 0 },
            { name: 'number-2', type: 'NUMBER', title: 'اختیاری', optional: true },
            { name: 'number-3', type: 'NUMBER', title: 'مقدار منفی', optional: true, negative: true },
            { name: 'number-4', type: 'NUMBER', title: 'مقدار اعشاری', optional: true, decimal: true },
            {
                name: 'number-5',
                type: 'NUMBER',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['number-2'] === 0,
                hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'number-6',
                type: 'NUMBER',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['number-2'] === 0,
                hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه نمایش داده نمی‌شود.',
            },
            { name: 'number-7', type: 'NUMBER', title: 'محدودیت مقدار', optional: true, minimum: 10, maximum: 20 },
        ],
    };
}
