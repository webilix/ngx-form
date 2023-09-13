import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const PriceInputs: NgxFormRow[] = [
    { name: 'price-1', type: 'PRICE', title: 'قیمت', value: 5000000 },
    { name: 'price-2', type: 'PRICE', title: 'اختیاری', optional: true },
    { name: 'price-3', type: 'PRICE', title: 'تغییر واحد پولی', currency: 'تومان', optional: true },
    {
        name: 'price-4',
        type: 'PRICE',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['price-2'] === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'price-5',
        type: 'PRICE',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['price-2'] === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه نمایش داده نمی‌شود.',
    },
    { name: 'price-6', type: 'PRICE', title: 'محدودیت مقدار', optional: true, minimum: 10, maximum: 20 },
    { name: 'price-7', type: 'PRICE', title: 'نمایش حروف', optional: true, showText: true },
    {
        name: 'price-8',
        type: 'PRICE',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['price-2'] === 0,
        },
        hint: 'در صورتی که مقدار اختیاری 0 باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'price-9',
        type: 'PRICE',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
