import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const MobileInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'mobile-1', type: 'MOBILE', value: '09123456789' },
    { name: 'mobile-2', type: 'MOBILE', title: 'اختیاری', optional: true },
    {
        name: 'mobile-3',
        type: 'MOBILE',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['mobile-2'] === '09123456789',
        hint: 'در صورتی که مقدار اختیاری 09123456789 باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'mobile-4',
        type: 'MOBILE',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['mobile-2'] === '09123456789',
        hint: 'در صورتی که مقدار اختیاری 09123456789 باشد این گزینه نمایش داده نمی‌شود.',
    },
];
