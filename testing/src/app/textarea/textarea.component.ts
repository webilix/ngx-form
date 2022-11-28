import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'textarea-1', type: 'TEXTAREA', title: 'متن چند خطی', value: 'متن\nچند\nخطی' },
            { name: 'textarea-2', type: 'TEXTAREA', title: 'اختیاری', optional: true },
            {
                name: 'textarea-3',
                type: 'TEXTAREA',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['textarea-2']?.includes('متن'),
                hint: 'در صورتی که مقدار اختیاری شامل کلمه متن باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'textarea-4',
                type: 'TEXTAREA',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['textarea-2']?.includes('متن'),
                hint: 'در صورتی که مقدار اختیاری شامل کلمه متن باشد این گزینه نمایش داده نمی‌شود.',
            },
            { name: 'textarea-5', type: 'TEXTAREA', title: 'تغییر ارتفاع', optional: true, height: 35 },
            { name: 'textarea-6', type: 'TEXTAREA', title: 'ارتفاع اتوماتیک', optional: true, autoHeight: true },
            { name: 'textarea-7', type: 'TEXTAREA', title: 'شمارنده تعداد کاراکتر', optional: true, counter: true },
            {
                name: 'textarea-8',
                type: 'TEXTAREA',
                title: 'حداکثر طول متن',
                optional: true,
                counter: true,
                maxLength: 50,
            },
        ],
    };
}
