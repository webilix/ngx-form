import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const BankCardInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'bank-card-1', type: 'BANK-CARD', value: '5022290000000000' },
    { name: 'bank-card-2', type: 'BANK-CARD', title: 'اختیاری', optional: true },
    {
        name: 'bank-card-3',
        type: 'BANK-CARD',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['bank-card-2'] === '5022290000000000',
        hint: 'در صورتی که مقدار اختیاری 5022290000000000 باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'bank-card-4',
        type: 'BANK-CARD',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['bank-card-2'] === '5022290000000000',
        hint: 'در صورتی که مقدار اختیاری 5022290000000000 باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'bank-card-5',
        type: 'BANK-CARD',
        title: 'نمایش بانک',
        optional: true,
        showBank: true,
        value: '5022290000000000',
    },
    {
        name: 'bank-card-6',
        type: 'BANK-CARD',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['bank-card-2'] === '5022290000000000',
        },
        hint: 'در صورتی که مقدار اختیاری 5022290000000000 باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
];
