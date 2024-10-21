import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const UnitAreaInputs: NgxFormRow[] = [
    { name: 'unit-area-1', type: 'UNIT-AREA', value: { unit: 'CM', value: 100 } },
    { name: 'unit-area-2', type: 'UNIT-AREA', title: 'اختیاری', optional: true },
    { name: 'unit-area-3', type: 'UNIT-AREA', title: 'واحد پیش‌فرض', unit: 'FT', optional: true },
    { name: 'unit-area-4', type: 'UNIT-AREA', title: 'مقدار اعشاری', optional: true, decimal: true },
    { name: 'unit-area-5', type: 'UNIT-AREA', title: 'مقدار اعشاری با ۵ رقم بعد از اعشار', optional: true, decimal: 5 },
    { name: 'unit-area-6', type: 'UNIT-AREA', title: 'محدودیت مقدار', optional: true, minimum: 10, maximum: 2000 },
    {
        name: 'unit-area-7',
        type: 'UNIT-AREA',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['unit-area-2']?.value === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'unit-area-8',
        type: 'UNIT-AREA',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['unit-area-2']?.value === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'unit-area-9',
        type: 'UNIT-AREA',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['unit-area-2']?.value === 0,
        },
        hint: 'در صورتی که مقدار اختیاری 0 باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'unit-area-10',
        type: 'UNIT-AREA',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
