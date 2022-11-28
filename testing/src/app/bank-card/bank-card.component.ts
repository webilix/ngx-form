import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './bank-card.component.html',
    styleUrls: ['./bank-card.component.scss'],
})
export class BankCardComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'bank-card-1', type: 'BANK-CARD', value: '1234567890123452' },
            { name: 'bank-card-2', type: 'BANK-CARD', title: 'اختیاری', optional: true },
            {
                name: 'bank-card-3',
                type: 'BANK-CARD',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['bank-card-2'] === '1234567890123452',
                hint: 'در صورتی که مقدار اختیاری 1234567890123452 باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'bank-card-4',
                type: 'BANK-CARD',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['bank-card-2'] === '1234567890123452',
                hint: 'در صورتی که مقدار اختیاری 1234567890123452 باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
