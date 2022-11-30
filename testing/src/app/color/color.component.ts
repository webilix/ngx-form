import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './color.component.html',
    styleUrls: ['./color.component.scss'],
})
export class ColorComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'color-1', type: 'COLOR', value: '#0000FF' },
            {
                name: 'color-2',
                type: 'COLOR',
                title: 'دارای لیست رنگ',
                optional: true,
                colors: ['#F00', '#0F0', '#00F', '#FF0', '#F0F', '#0FF', '#FFF', '#000', '#777'],
            },
            { name: 'color-3', type: 'COLOR', title: 'اختیاری', optional: true },
            {
                name: 'color-4',
                type: 'COLOR',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['color-3'] === '#ffffff',
                hint: 'در صورتی که مقدار اختیاری سفید باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'color-5',
                type: 'COLOR',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['color-3'] === '#ffffff',
                hint: 'در صورتی که مقدار اختیاری سفید باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
