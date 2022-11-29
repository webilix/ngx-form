import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
    public showValues = console.log;

    public options = [
        { id: '1ST', title: 'گزینه اول' },
        { id: '2ND', title: 'گزینه دوم' },
        { id: '3RD', title: 'گزینه سوم' },
        { id: '4TH', title: 'گزینه چهارم' },
        { id: '5TH', title: 'گزینه پنجم' },
    ];
    public optionsEN = ['1ST', '2ND', '3RD', '4TH', '5TH'].map((en) => ({ id: en, title: en }));
    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'select-1', type: 'SELECT', title: 'لیست کشویی', value: '1ST', options: this.options },
            { name: 'select-2', type: 'SELECT', title: 'اختیاری', options: this.options, optional: true },
            {
                name: 'select-3',
                type: 'SELECT',
                title: 'انگلیسی',
                options: this.optionsEN,
                optional: true,
                english: true,
            },
            {
                name: 'select-4',
                type: 'SELECT',
                title: 'غیرفعال شدن',
                options: this.options,
                optional: true,
                disableOn: (values: INgxFormValues) => values['select-3'] === '2ND',
                hint: 'در صورتی که مقدار انگلیسی برابر گزینه دوم باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'select-5',
                type: 'SELECT',
                title: 'عدم نمایش',
                options: this.options,
                optional: true,
                hideOn: (values: INgxFormValues) => values['select-3'] === '2ND',
                hint: 'در صورتی که مقدار انگلیسی برابر گزینه دوم باشد این گزینه نمایش داده نمی‌شود.',
            },
            {
                name: 'select-6',
                type: 'SELECT',
                title: 'جستجوی گزینه‌ها',
                options: [
                    ...this.options,
                    { id: '6TH', title: 'گزینه ششم' },
                    { id: '7TH', title: 'گزینه هفتم' },
                    { id: '8TH', title: 'گزینه هشتم' },
                    { id: '9TH', title: 'گزینه نهم' },
                    { id: 'ATH', title: 'گزینه ده‌ام' },
                    { id: 'BTH', title: 'گزینه یازده‌ام' },
                ],
                optional: true,
            },
        ],
    };
}
