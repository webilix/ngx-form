import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './ip.component.html',
    styleUrls: ['./ip.component.scss'],
})
export class IpComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'ip-1', type: 'IP', value: '127.0.0.1' },
            { name: 'ip-2', type: 'IP', title: 'اختیاری', optional: true },
            {
                name: 'ip-3',
                type: 'IP',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['ip-2'] === '127.0.0.1',
                hint: 'در صورتی که مقدار اختیاری 127.0.0.1 باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'ip-4',
                type: 'IP',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['ip-2'] === '127.0.0.1',
                hint: 'در صورتی که مقدار اختیاری 127.0.0.1 باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
