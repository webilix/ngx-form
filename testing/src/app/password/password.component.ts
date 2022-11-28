import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'passowrd-1', type: 'PASSWORD' },
            { name: 'passowrd-2', type: 'PASSWORD', title: 'حداقل طول', optional: true, minLength: 3 },
            {
                name: 'passowrd-3',
                type: 'PASSWORD',
                title: 'حروف بزرگ اختیاری',
                optional: true,
                minLength: 3,
                forceUpperCase: false,
            },
            {
                name: 'passowrd-4',
                type: 'PASSWORD',
                title: 'حروف کوچک اختیاری',
                optional: true,
                minLength: 3,
                forceLowerCase: false,
            },
            {
                name: 'passowrd-5',
                type: 'PASSWORD',
                title: 'اعداد اختیاری',
                optional: true,
                minLength: 3,
                forceNumber: false,
            },
            { name: 'passowrd-6', type: 'PASSWORD', title: 'عدم بررسی', optional: true, unverified: true },
            {
                name: 'passowrd-7',
                type: 'PASSWORD',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['passowrd-6'] === 'password',
                hint: 'در صورتی که مقدار عدم بررسی password باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'passowrd-8',
                type: 'PASSWORD',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['passowrd-6'] === 'password',
                hint: 'در صورتی که مقدار عدم بررسی password باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
