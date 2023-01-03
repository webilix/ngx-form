import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const TextInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'text-1', type: 'TEXT', title: 'متن یک خطی', value: 'مقدار مشخص شده برای متن یک خطی' },
    { name: 'text-2', type: 'TEXT', title: 'اختیاری', optional: true },
    { name: 'text-3', type: 'TEXT', title: 'انگلیسی', optional: true, english: true },
    {
        name: 'text-4',
        type: 'TEXT',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['text-3'] === 'TEXT',
        hint: 'در صورتی که مقدار انگلیسی TEXT باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'text-5',
        type: 'TEXT',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['text-3'] === 'TEXT',
        hint: 'در صورتی که مقدار انگلیسی TEXT باشد این گزینه نمایش داده نمی‌شود.',
    },
    { name: 'text-6', type: 'TEXT', title: 'شمارنده', optional: true, counter: true },
    {
        name: 'text-7',
        type: 'TEXT',
        title: 'محدودیت تعداد کاراکتر',
        optional: true,
        counter: true,
        minLength: 5,
        maxLength: 20,
    },
    { name: 'text-8', type: 'TEXT', title: 'دارای پسوند', optional: true, suffix: 'پسوند' },
];
