import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const UnitVolumeInputs: NgxFormRow[] = [
    { name: 'unit-volume-1', type: 'UNIT-VOLUME', value: { unit: 'ML', value: 100 } },
    { name: 'unit-volume-2', type: 'UNIT-VOLUME', title: 'اختیاری', optional: true },
    { name: 'unit-volume-3', type: 'UNIT-VOLUME', title: 'واحد پیش‌فرض', unit: 'GL', optional: true },
    { name: 'unit-volume-4', type: 'UNIT-VOLUME', title: 'مقدار اعشاری', optional: true, decimal: true },
    {
        name: 'unit-volume-5',
        type: 'UNIT-VOLUME',
        title: 'مقدار اعشاری با ۵ رقم بعد از اعشار',
        optional: true,
        decimal: 5,
    },
    { name: 'unit-volume-6', type: 'UNIT-VOLUME', title: 'محدودیت مقدار', optional: true, minimum: 10, maximum: 2000 },
    {
        name: 'unit-volume-7',
        type: 'UNIT-VOLUME',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['unit-volume-2']?.value === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'unit-volume-8',
        type: 'UNIT-VOLUME',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['unit-volume-2']?.value === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'unit-volume-9',
        type: 'UNIT-VOLUME',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['unit-volume-2']?.value === 0,
        },
        hint: 'در صورتی که مقدار اختیاری 0 باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'unit-volume-10',
        type: 'UNIT-VOLUME',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
