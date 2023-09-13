import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const MaskInputs: NgxFormRow[] = [
    { name: 'mask-1', type: 'MASK', title: 'فرمت عددی', mask: '000000-000', value: '123456-789' },
    { name: 'mask-2', type: 'MASK', title: 'آیکون', mask: '000000-000', icon: 'input', optional: true },
    { name: 'mask-3', type: 'MASK', title: 'اختیاری', mask: '000000-000', optional: true },
    {
        name: 'mask-4',
        type: 'MASK',
        title: 'غیرفعال شدن',
        mask: '000000-000',
        optional: true,
        disableOn: (values: INgxFormValues) => !!values['mask-3'],
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'mask-5',
        type: 'MASK',
        title: 'عدم نمایش',
        mask: '000000-000',
        optional: true,
        hideOn: (values: INgxFormValues) => !!values['mask-3'],
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'mask-6',
        type: 'MASK',
        title: 'دارای کلید اضافه',
        mask: '000000-000',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => !!values['mask-3'],
        },
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'mask-7',
        type: 'MASK',
        title: 'دارای توضیحات',
        mask: '000000-000',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
