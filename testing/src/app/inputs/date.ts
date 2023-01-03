import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const DateInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'date-1', type: 'DATE', value: new Date('Jun 03 1979 00:00:00') },
    { name: 'date-2', type: 'DATE', title: 'حداقل تاریخ', optional: true, minDate: new Date() },
    { name: 'date-3', type: 'DATE', title: 'حداکثر تاریخ', optional: true, maxDate: new Date() },
    { name: 'date-4', type: 'DATE', title: 'اختیاری', optional: true },
    {
        name: 'date-5',
        type: 'DATE',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['date-4'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'date-6',
        type: 'DATE',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['date-4'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
    },
];
