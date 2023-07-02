import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const TimeInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'time-1', type: 'TIME', value: '12:00:00' },
    { name: 'time-2', type: 'TIME', title: 'ثانیه', optional: true, second: true },
    { name: 'time-3', type: 'TIME', title: 'اختیاری', optional: true },
    {
        name: 'time-4',
        type: 'TIME',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['time-3'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'time-5',
        type: 'TIME',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['time-3'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'time-6',
        type: 'TIME',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['time-3'] !== null,
        },
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
];
