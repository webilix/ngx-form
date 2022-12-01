import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            {
                name: 'list-1',
                type: 'LIST',
                title: 'لیست',
                value: ['گزینه اول', 'گزینه دوم', 'گزینه سوم', 'گزینه چهارم'],
            },
            {
                name: 'list-2',
                type: 'LIST',
                title: 'انگلیسی',
                english: true,
                value: ['1ST Item', '2ND Item'],
            },
            { name: 'list-3', type: 'LIST', title: 'کارت بانکی', format: 'BANK-CARD' },
            { name: 'list-4', type: 'LIST', title: 'دامنه سایت', format: 'DOMAIN' },
            { name: 'list-5', type: 'LIST', title: 'ایمیل', format: 'EMAIL' },
            { name: 'list-6', type: 'LIST', title: 'آدرس آی‌پی', format: 'IP' },
            { name: 'list-7', type: 'LIST', title: 'موبایل', format: 'MOBILE' },
            { name: 'list-8', type: 'LIST', title: 'کد ملی', format: 'NATIONAL-CODE' },
            { name: 'list-9', type: 'LIST', title: 'عبارت عددی', format: 'NUMERIC' },
            { name: 'list-10', type: 'LIST', title: 'آدرس سایت', format: 'URL' },
            {
                name: 'list-11',
                type: 'LIST',
                title: 'ترتیب نمایش',
                value: ['گزینه اول', 'گزینه دوم', 'گزینه سوم', 'گزینه چهارم'],
                sort: true,
            },
            { name: 'list-12', type: 'LIST', title: 'مقادیر تکراری', duplicate: true },
            { name: 'list-13', type: 'LIST', title: 'محدودت تعداد', minCount: 2, maxCount: 5 },
            {
                name: 'list-14',
                type: 'LIST',
                title: 'غیرفعال شدن',
                disableOn: (values: INgxFormValues) => values['list-13']?.length === 2,
                hint: 'در صورتی که دو گزینه در محدودت تعداد مشخص شده باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'list-15',
                type: 'LIST',
                title: 'عدم نمایش',
                hideOn: (values: INgxFormValues) => values['list-13']?.length === 2,
                hint: 'در صورتی که دو گزینه در محدودت تعداد مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
