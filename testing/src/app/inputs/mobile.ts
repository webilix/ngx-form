import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const MobileInputs: NgxFormRow[] = [
    { name: 'mobile-1', type: 'MOBILE', value: '09123456789' },
    { name: 'mobile-2', type: 'MOBILE', title: 'اختیاری', optional: true },
    {
        name: 'mobile-3',
        type: 'MOBILE',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['mobile-2'] === '09123456789',
        hint: 'در صورتی که مقدار اختیاری 09123456789 باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'mobile-4',
        type: 'MOBILE',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['mobile-2'] === '09123456789',
        hint: 'در صورتی که مقدار اختیاری 09123456789 باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'mobile-5',
        type: 'MOBILE',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['mobile-2'] === '09123456789',
        },
        hint: 'در صورتی که مقدار اختیاری 09123456789 باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'mobile-6',
        type: 'MOBILE',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
