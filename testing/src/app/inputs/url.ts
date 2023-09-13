import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const UrlInputs: NgxFormRow[] = [
    { name: 'url-1', type: 'URL', value: 'https://domain.com' },
    { name: 'url-2', type: 'URL', title: 'اختیاری', optional: true },
    {
        name: 'url-3',
        type: 'URL',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['url-2'] === 'https://domain.com',
        hint: 'در صورتی که مقدار اختیاری https://domain.com باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'url-4',
        type: 'URL',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['url-2'] === 'https://domain.com',
        hint: 'در صورتی که مقدار اختیاری https://domain.com باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'url-5',
        type: 'URL',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['url-2'] === 'https://domain.com',
        },
        hint: 'در صورتی که مقدار اختیاری https://domain.com باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'url-6',
        type: 'URL',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
