import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const EmailInputs: NgxFormRow[] = [
    { name: 'email-1', type: 'EMAIL', value: 'email@domain.com' },
    { name: 'email-2', type: 'EMAIL', title: 'اختیاری', optional: true },
    {
        name: 'email-3',
        type: 'EMAIL',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['email-2'] === 'email@domain.com',
        hint: 'در صورتی که مقدار اختیاری email@domain.com باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'email-4',
        type: 'EMAIL',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['email-2'] === 'email@domain.com',
        hint: 'در صورتی که مقدار اختیاری email@domain.com باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'email-5',
        type: 'EMAIL',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['email-2'] === 'email@domain.com',
        },
        hint: 'در صورتی که مقدار اختیاری email@domain.com باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'email-6',
        type: 'EMAIL',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
