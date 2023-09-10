import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const NationalCodeInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'national-code-1', type: 'NATIONAL-CODE', value: '1234567891' },
    { name: 'national-code-2', type: 'NATIONAL-CODE', title: 'اختیاری', optional: true },
    {
        name: 'national-code-3',
        type: 'NATIONAL-CODE',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['national-code-2'] === '1234567891',
        hint: 'در صورتی که مقدار اختیاری 1234567891 باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'national-code-4',
        type: 'NATIONAL-CODE',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['national-code-2'] === '1234567891',
        hint: 'در صورتی که مقدار اختیاری 1234567891 باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'national-code-5',
        type: 'NATIONAL-CODE',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['national-code-2'] === '1234567891',
        },
        hint: 'در صورتی که مقدار اختیاری 1234567891 باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'national-code-6',
        type: 'NATIONAL-CODE',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
