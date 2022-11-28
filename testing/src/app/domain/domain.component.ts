import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './domain.component.html',
    styleUrls: ['./domain.component.scss'],
})
export class DomainComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'domain-1', type: 'DOMAIN', value: 'domain.com' },
            { name: 'domain-2', type: 'DOMAIN', title: 'اختیاری', optional: true },
            {
                name: 'domain-3',
                type: 'DOMAIN',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['domain-2'] === 'domain.com',
                hint: 'در صورتی که مقدار اختیاری domain.com باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'domain-4',
                type: 'DOMAIN',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['domain-2'] === 'domain.com',
                hint: 'در صورتی که مقدار اختیاری domain.com باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
