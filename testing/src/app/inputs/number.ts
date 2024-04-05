import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const NumberInputs: NgxFormRow[] = [
    { name: 'number-1', type: 'NUMBER', title: 'مقدار عددی', value: 0 },
    { name: 'number-2', type: 'NUMBER', title: 'دارای پسوند', optional: true, suffix: 'پسوند' },
    { name: 'number-3', type: 'NUMBER', title: 'اختیاری', optional: true },
    { name: 'number-4', type: 'NUMBER', title: 'مقدار منفی', optional: true, negative: true },
    { name: 'number-5', type: 'NUMBER', title: 'مقدار اعشاری', optional: true, decimal: true },
    {
        name: 'number-6',
        type: 'NUMBER',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['number-3'] === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'number-7',
        type: 'NUMBER',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['number-3'] === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه نمایش داده نمی‌شود.',
    },
    { name: 'number-8', type: 'NUMBER', title: 'محدودیت مقدار', optional: true, minimum: 10, maximum: 2000 },
    { name: 'number-9', type: 'NUMBER', title: 'نمایش حروف', optional: true, text: 'LETTER' },
    {
        name: 'number-10',
        type: 'NUMBER',
        title: 'نمایش حروف و هینت',
        optional: true,
        text: 'LETTER',
        hint: 'این گزینه دارای توضیحات است.',
    },
    { name: 'number-11', type: 'NUMBER', title: 'نمایش ساعت', optional: true, text: 'HOUR' },
    { name: 'number-12', type: 'NUMBER', title: 'نمایش دقیقه', optional: true, text: 'MINUTE' },
    { name: 'number-13', type: 'NUMBER', title: 'نمایش ثانیه', optional: true, text: 'SECOND' },
    {
        name: 'number-14',
        type: 'NUMBER',
        title: 'نمایش ثانیه و هینت',
        optional: true,
        text: 'SECOND',
        hint: 'این گزینه دارای توضیحات است.',
    },
    {
        name: 'number-15',
        type: 'NUMBER',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['number-3'] === 0,
        },
        hint: 'در صورتی که مقدار اختیاری 0 باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'number-16',
        type: 'NUMBER',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
