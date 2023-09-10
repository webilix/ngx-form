import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const ColorInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'color-1', type: 'COLOR', value: '#0000FF' },
    {
        name: 'color-2',
        type: 'COLOR',
        title: 'دارای لیست رنگ',
        optional: true,
        colors: ['#F00', '#0F0', '#00F', '#FF0', '#F0F', '#0FF', '#FFF', '#000', '#777'],
    },
    { name: 'color-3', type: 'COLOR', title: 'اختیاری', optional: true },
    {
        name: 'color-4',
        type: 'COLOR',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['color-3'] === '#ffffff',
        hint: 'در صورتی که مقدار اختیاری سفید باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'color-5',
        type: 'COLOR',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['color-3'] === '#ffffff',
        hint: 'در صورتی که مقدار اختیاری سفید باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'color-6',
        type: 'COLOR',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['color-3'] === '#ffffff',
        },
        hint: 'در صورتی که مقدار اختیاری سفید باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'color-7',
        type: 'COLOR',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
