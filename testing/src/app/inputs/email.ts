import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const EmailInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'email-1', type: 'EMAIL', value: 'email@domain.com' },
    { name: 'email-2', type: 'EMAIL', title: 'اختیاری', optional: true },
    {
        name: 'email-3',
        type: 'EMAIL',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['email-2'] === 'email@domain.com',
        hint: 'در صورتی که مقدار اختیاری email@domain.com باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'email-4',
        type: 'EMAIL',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['email-2'] === 'email@domain.com',
        hint: 'در صورتی که مقدار اختیاری email@domain.com باشد این گزینه نمایش داده نمی‌شود.',
    },
];
