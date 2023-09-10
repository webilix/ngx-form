import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const DomainInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'domain-1', type: 'DOMAIN', value: 'domain.com' },
    { name: 'domain-2', type: 'DOMAIN', title: 'اختیاری', optional: true },
    {
        name: 'domain-3',
        type: 'DOMAIN',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['domain-2'] === 'domain.com',
        hint: 'در صورتی که مقدار اختیاری domain.com باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'domain-4',
        type: 'DOMAIN',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['domain-2'] === 'domain.com',
        hint: 'در صورتی که مقدار اختیاری domain.com باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'domain-5',
        type: 'DOMAIN',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['domain-2'] === 'domain.com',
        },
        hint: 'در صورتی که مقدار اختیاری domain.com باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'domain-6',
        type: 'DOMAIN',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
