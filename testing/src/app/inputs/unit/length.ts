import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const UnitLengthInputs: NgxFormRow[] = [
    { name: 'unit-length-1', type: 'UNIT-LENGTH', value: { unit: 'CM', value: 100 } },
    { name: 'unit-length-2', type: 'UNIT-LENGTH', title: 'اختیاری', optional: true },
    { name: 'unit-length-3', type: 'UNIT-LENGTH', title: 'واحد پیش‌فرض', unit: 'FT', optional: true },
    { name: 'unit-length-4', type: 'UNIT-LENGTH', title: 'مقدار اعشاری', optional: true, decimal: true },
    {
        name: 'unit-length-5',
        type: 'UNIT-LENGTH',
        title: 'مقدار اعشاری با ۵ رقم بعد از اعشار',
        optional: true,
        decimal: 5,
    },
    { name: 'unit-length-6', type: 'UNIT-LENGTH', title: 'محدودیت مقدار', optional: true, minimum: 10, maximum: 2000 },
    {
        name: 'unit-length-7',
        type: 'UNIT-LENGTH',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['unit-length-2']?.value === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'unit-length-8',
        type: 'UNIT-LENGTH',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['unit-length-2']?.value === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'unit-length-9',
        type: 'UNIT-LENGTH',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['unit-length-2']?.value === 0,
        },
        hint: 'در صورتی که مقدار اختیاری 0 باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'unit-length-10',
        type: 'UNIT-LENGTH',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
