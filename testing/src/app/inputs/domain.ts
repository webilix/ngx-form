import { INgxFormValues, NgxFormInputTypes } from '@ngx-form';

export const DomainInputs: (NgxFormInputTypes | NgxFormInputTypes[])[] = [
    { name: 'domain-1', type: 'DOMAIN', value: 'domain.com' },
    { name: 'domain-2', type: 'DOMAIN', title: 'اختیاری', optional: true },
    {
        name: 'domain-3',
        type: 'DOMAIN',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['domain-2'] === 'domain.com',
        hint: 'در صورتی که مقدار اختیاری domain.com باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'domain-4',
        type: 'DOMAIN',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['domain-2'] === 'domain.com',
        hint: 'در صورتی که مقدار اختیاری domain.com باشد این گزینه نمایش داده نمی‌شود.',
    },
];
