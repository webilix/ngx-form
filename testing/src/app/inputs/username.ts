import { INgxFormValues, NgxFormInputTypes } from '@ngx-form';

export const UsernameInputs: (NgxFormInputTypes | NgxFormInputTypes[])[] = [
    { name: 'username-1', type: 'USERNAME', value: 'username' },
    { name: 'username-2', type: 'USERNAME', title: 'حداقل طول', optional: true, minLength: 5 },
    { name: 'username-3', type: 'USERNAME', title: 'عدم بررسی کارکتر شروع', optional: true, startWithChar: false },
    { name: 'username-4', type: 'USERNAME', title: 'عدم بررسی کارکتر پایان', optional: true, endWithChar: false },
    { name: 'username-5', type: 'USERNAME', title: 'عدم استفاده از منها', optional: true, useDash: false },
    { name: 'username-6', type: 'USERNAME', title: 'عدم استفاده از نقطه', optional: true, useDot: false },
    { name: 'username-7', type: 'USERNAME', title: 'اختیاری', optional: true },
    {
        name: 'username-8',
        type: 'USERNAME',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['username-7'] === 'username',
        hint: 'در صورتی که مقدار اختیاری username باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'username-9',
        type: 'USERNAME',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['username-7'] === 'username',
        hint: 'در صورتی که مقدار اختیاری username باشد این گزینه نمایش داده نمی‌شود.',
    },
];
