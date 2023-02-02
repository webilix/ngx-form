import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const NumberInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'number-1', type: 'NUMBER', title: 'مقدار عددی', value: 0 },
    { name: 'number-2', type: 'NUMBER', title: 'دارای پسوند', optional: true, suffix: 'پسوند' },
    { name: 'number-3', type: 'NUMBER', title: 'اختیاری', optional: true },
    { name: 'number-4', type: 'NUMBER', title: 'مقدار منفی', optional: true, negative: true },
    { name: 'number-5', type: 'NUMBER', title: 'مقدار اعشاری', optional: true, decimal: true },
    {
        name: 'number-6',
        type: 'NUMBER',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['number-2'] === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'number-7',
        type: 'NUMBER',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['number-2'] === 0,
        hint: 'در صورتی که مقدار اختیاری 0 باشد این گزینه نمایش داده نمی‌شود.',
    },
    { name: 'number-8', type: 'NUMBER', title: 'محدودیت مقدار', optional: true, minimum: 10, maximum: 20 },
];
