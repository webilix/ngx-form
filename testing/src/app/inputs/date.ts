import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const DateInputs: NgxFormRow[] = [
    { name: 'date-1', type: 'DATE', value: new Date('Jun 03 1979 12:34:56') },
    { name: 'date-2', type: 'DATE', title: 'انتخاب ساعت', optional: true, hour: true },
    { name: 'date-3', type: 'DATE', title: 'حداقل تاریخ', optional: true, minDate: new Date() },
    { name: 'date-4', type: 'DATE', title: 'حداکثر تاریخ', optional: true, maxDate: new Date() },
    { name: 'date-5', type: 'DATE', title: 'اختیاری', optional: true },
    {
        inputs: [
            {
                name: 'date-6',
                type: 'DATE',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['date-5'] !== null,
                hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'date-7',
                type: 'DATE',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['date-5'] !== null,
                hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
        flex: [1, 1],
    },
    {
        name: 'date-8',
        type: 'DATE',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: (values: INgxFormValues) => console.log('EXTRA BUTTON', values),
            disableOn: (values: INgxFormValues) => values['date-5'] !== null,
        },
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'date-9',
        type: 'DATE',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
