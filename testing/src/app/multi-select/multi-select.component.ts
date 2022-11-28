import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './multi-select.component.html',
    styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent {
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
            {
                name: 'multi-select-1',
                type: 'MULTI-SELECT',
                title: 'چند انتخابی',
                value: ['1ST'],
                options: this.options,
            },
            {
                name: 'multi-select-2',
                type: 'MULTI-SELECT',
                title: 'نمایش تگ',
                options: this.options,
                view: 'TAG',
            },
            {
                name: 'multi-select-3',
                type: 'MULTI-SELECT',
                title: 'نمایش لیست کشویی',
                options: this.options,
                view: 'SELECT',
            },
            {
                name: 'multi-select-4',
                type: 'MULTI-SELECT',
                title: 'غیرفعال شدن',
                options: this.options,
                disableOn: (values: INgxFormValues) => values['multi-select-3'].includes('2ND'),
                hint: 'در صورتی که گزینه نمایش لیست کشویی شامل گزینه دوم باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'multi-select-5',
                type: 'MULTI-SELECT',
                title: 'عدم نمایش',
                options: this.options,
                hideOn: (values: INgxFormValues) => values['multi-select-3'].includes('3RD'),
                hint: 'در صورتی که گزینه نمایش لیست کشویی شامل گزینه سوم باشد این گزینه نمایش داده نمی‌شود.',
            },
            {
                name: 'multi-select-6',
                type: 'MULTI-SELECT',
                title: 'محدودیت تعداد انتخاب',
                options: this.options,
                minCount: 2,
                maxCount: 4,
            },
            {
                name: 'multi-select-7',
                type: 'MULTI-SELECT',
                title: 'انگلیسی',
                value: ['1ST'],
                options: this.optionsEN,
                english: true,
            },
            {
                name: 'multi-select-8',
                type: 'MULTI-SELECT',
                title: 'نمایش انگلیسی تگ',
                options: this.optionsEN,
                view: 'TAG',
                english: true,
            },
            {
                name: 'multi-select-9',
                type: 'MULTI-SELECT',
                title: 'نمایش انگلیسی لیست کشویی',
                options: this.optionsEN,
                view: 'SELECT',
                english: true,
            },
        ],
    };
}
