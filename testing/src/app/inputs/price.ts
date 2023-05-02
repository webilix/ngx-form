import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const PriceInputs: (NgxFormInputs | NgxFormInputs[])[] = [
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
];
