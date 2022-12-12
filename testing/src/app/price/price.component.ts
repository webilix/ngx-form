import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.scss'],
})
export class PriceComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'price-1', type: 'PRICE', title: 'قیمت', value: 5000000 },
            { name: 'price-2', type: 'PRICE', title: 'اختیاری', optional: true },
            { name: 'price-3', type: 'PRICE', title: 'تغییر واحد پولی', currency: 'تومان', optional: true },
            {
                name: 'price-4',
                type: 'PRICE',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['price-2'] === 0,
                hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'price-5',
                type: 'PRICE',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['price-2'] === 0,
                hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه نمایش داده نمی‌شود.',
            },
            { name: 'price-6', type: 'PRICE', title: 'محدودیت مقدار', optional: true, minimum: 10, maximum: 20 },
        ],
    };
}
