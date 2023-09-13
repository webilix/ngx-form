import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const PlateInputs: NgxFormRow[] = [
    { name: 'plate-1', type: 'PLATE', value: ['12', 'ع', '345', '67'] },
    { name: 'plate-2', type: 'PLATE', title: 'اختیاری', optional: true },
    {
        name: 'plate-3',
        type: 'PLATE',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['plate-2'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'plate-4',
        type: 'PLATE',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['plate-2'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
    },
    { name: 'plate-5', type: 'PLATE', title: 'حرف پیش‌فرض', optional: true, letter: 'ع' },
    {
        name: 'plate-6',
        type: 'PLATE',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['plate-2'] !== null,
        },
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'plate-7',
        type: 'PLATE',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
