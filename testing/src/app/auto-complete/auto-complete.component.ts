import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './auto-complete.component.html',
    styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent {
    public showValues = console.log;

    private options: string[] = ['سیمیلیس', 'مپانگا', 'کت اتو', 'پلکو'];
    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            {
                name: 'auto-complete-1',
                type: 'AUTO-COMPLETE',
                title: 'لیست تکمیلی',
                value: 'پلکو',
                options: this.options,
            },
            { name: 'auto-complete-2', type: 'AUTO-COMPLETE', title: 'اختیاری', options: this.options, optional: true },
            {
                name: 'auto-complete-3',
                type: 'AUTO-COMPLETE',
                title: 'انگلیسی',
                options: ['1ST', '2ND', '3RD', '4TH'],
                optional: true,
                english: true,
            },
            {
                name: 'auto-complete-4',
                type: 'AUTO-COMPLETE',
                title: 'غیرفعال شدن',
                options: this.options,
                optional: true,
                disableOn: (values: INgxFormValues) => values['auto-complete-2'] === 'سیمیلیس',
                hint: 'در صورتی که مقدار اختیاری سیمیلیس باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'auto-complete-5',
                type: 'AUTO-COMPLETE',
                title: 'عدم نمایش',
                options: this.options,
                optional: true,
                hideOn: (values: INgxFormValues) => values['auto-complete-2'] === 'سیمیلیس',
                hint: 'در صورتی که مقدار اختیاری سیمیلیس باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
