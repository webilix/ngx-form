import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.scss'],
})
export class EmailComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'email-1', type: 'EMAIL', value: 'email@domain.com' },
            { name: 'email-2', type: 'EMAIL', title: 'اختیاری', optional: true },
            {
                name: 'email-3',
                type: 'EMAIL',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['email-2'] === 'disable@domain.com',
                hint: 'در صورتی که مقدار اختیاری disable@domain.com باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'email-4',
                type: 'EMAIL',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['email-2'] === 'hidden@domain.com',
                hint: 'در صورتی که مقدار اختیاری hidden@domain.com باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
