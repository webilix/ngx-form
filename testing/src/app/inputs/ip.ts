import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const IpInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'ip-1', type: 'IP', value: '127.0.0.1' },
    { name: 'ip-2', type: 'IP', title: 'اختیاری', optional: true },
    {
        name: 'ip-3',
        type: 'IP',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['ip-2'] === '127.0.0.1',
        hint: 'در صورتی که مقدار اختیاری 127.0.0.1 باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'ip-4',
        type: 'IP',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['ip-2'] === '127.0.0.1',
        hint: 'در صورتی که مقدار اختیاری 127.0.0.1 باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'ip-5 ',
        type: 'IP',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['ip-2'] === '127.0.0.1',
        },
        hint: 'در صورتی که مقدار اختیاری 127.0.0.1 باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
];
