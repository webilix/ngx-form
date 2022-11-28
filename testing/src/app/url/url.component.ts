import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './url.component.html',
    styleUrls: ['./url.component.scss'],
})
export class UrlComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'url-1', type: 'URL', value: 'https://domain.com' },
            { name: 'url-2', type: 'URL', title: 'اختیاری', optional: true },
            {
                name: 'url-3',
                type: 'URL',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['url-2'] === 'https://domain.com',
                hint: 'در صورتی که مقدار اختیاری https://domain.com باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'url-4',
                type: 'URL',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['url-2'] === 'https://domain.com',
                hint: 'در صورتی که مقدار اختیاری https://domain.com باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
