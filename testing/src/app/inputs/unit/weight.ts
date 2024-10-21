import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const UnitWeightInputs: NgxFormRow[] = [
    { name: 'unit-weight-1', type: 'UNIT-WEIGHT', value: { unit: 'KG', value: 100 } },
    { name: 'unit-weight-2', type: 'UNIT-WEIGHT', title: 'اختیاری', optional: true },
    { name: 'unit-weight-3', type: 'UNIT-WEIGHT', title: 'واحد پیش‌فرض', unit: 'OZ', optional: true },
    { name: 'unit-weight-4', type: 'UNIT-WEIGHT', title: 'مقدار اعشاری', optional: true, decimal: true },
    {
        name: 'unit-weight-5',
        type: 'UNIT-WEIGHT',
        title: 'مقدار اعشاری با ۵ رقم بعد از اعشار',
        optional: true,
        decimal: 5,
    },
    { name: 'unit-weight-6', type: 'UNIT-WEIGHT', title: 'محدودیت مقدار', optional: true, minimum: 10, maximum: 2000 },
    {
        name: 'unit-weight-7',
        type: 'UNIT-WEIGHT',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['unit-weight-2']?.value === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'unit-weight-8',
        type: 'UNIT-WEIGHT',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['unit-weight-2']?.value === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'unit-weight-9',
        type: 'UNIT-WEIGHT',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['unit-weight-2']?.value === 0,
        },
        hint: 'در صورتی که مقدار اختیاری 0 باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'unit-weight-10',
        type: 'UNIT-WEIGHT',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
