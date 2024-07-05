import { Component } from '@angular/core';

import { INgxFormValues, INgxResponsiveForm } from '@ngx-form';

@Component({
    host: { selector: 'page-responsive' },
    templateUrl: './page-responsive.component.html',
    styleUrl: './page-responsive.component.scss',
})
export class PageResponsiveComponent {
    public showValues = console.log;
    public view: 'MOBILE' | 'DESKTOP' = 'DESKTOP';

    public ngxForm: INgxResponsiveForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        sections: [
            {
                columns: [
                    { title: 'ستون اول', inputs: [{ name: 'date-1', type: 'DATE', optional: true }] },
                    { title: 'ستون دوم', inputs: [{ name: 'date-2', type: 'DATE', optional: true }] },
                    { title: 'ستون سوم', inputs: [{ name: 'date-3', type: 'DATE', optional: true }] },
                    { title: 'ستون چهارم', inputs: [{ name: 'date-4', type: 'DATE', optional: true }] },
                ],
            },
            {
                title: 'مشخصات عضویت',
                description: 'این بخش از فرم در حالت نمایش دسکتاپ در سه ستون نمایش داده می‌شود.',
                columns: [
                    {
                        inputs: [
                            { name: 'first-name', type: 'TEXT', title: 'نام' },
                            { name: 'last-name', type: 'TEXT', title: 'نام خانوادگی' },
                            { name: 'father-name', type: 'TEXT', title: 'نام پدر', optional: true },
                        ],
                    },
                    {
                        inputs: [
                            { name: 'national-code', type: 'NATIONAL-CODE' },
                            { name: 'email', type: 'EMAIL', optional: true },
                            { name: 'mobile', type: 'MOBILE', optional: true },
                        ],
                        flex: 0.75,
                    },
                    {
                        inputs: [
                            {
                                name: 'gender',
                                type: 'SELECT',
                                title: 'جنسیت',
                                options: [
                                    { id: 'MALE', title: 'مرد' },
                                    { id: 'FEMALE', title: 'زن' },
                                ],
                            },
                            { name: 'birth-day', type: 'DATE', title: 'تاریخ تولد', optional: true },
                            { name: 'bio', type: 'TEXTAREA', title: 'بیوگرافی', optional: true },
                        ],
                        flex: 0.75,
                    },
                ],
            },
            {
                title: 'تنظیمات',
                columns: [
                    {
                        inputs: [
                            {
                                name: 'setting',
                                type: 'MULTI-SELECT',
                                title: 'تنظیمات',
                                options: [
                                    { id: 'DORM', title: 'استفاده از خوابگاه' },
                                    { id: 'TRANSPORT', title: 'استفاده از سرویس حمل و نقل' },
                                ],
                            },
                        ],
                    },
                    {
                        inputs: [
                            {
                                name: 'dorm',
                                type: 'SELECT',
                                title: 'خوابگاه',
                                options: [
                                    { id: '1', title: 'خوابگاه ۱' },
                                    { id: '2', title: 'خوابگاه ۲' },
                                ],
                                hideOn: (values: INgxFormValues) => !values['setting']?.includes('DORM'),
                            },
                            {
                                name: 'transport',
                                type: 'SELECT',
                                title: 'سرویس',
                                options: [
                                    { id: '1', title: 'سرویس ۱' },
                                    { id: '2', title: 'سرویس ۲' },
                                ],
                                hideOn: (values: INgxFormValues) => !values['setting']?.includes('TRANSPORT'),
                            },
                        ],
                    },
                ],
            },
            {
                columns: [
                    {
                        name: 'textarea',
                        type: 'TEXTAREA',
                        title: 'توضیحات',
                        optional: true,
                        button: { icon: 'add', click: () => this.showValues('INPUT EXTRA BUTTON') },
                    },
                ],
            },
        ],
        buttons: [{ title: 'کلید دوم', action: () => this.showValues('FORM EXTRA BUTTON') }],
        appearance: 'fill',
    };
}
