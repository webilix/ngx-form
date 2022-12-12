import { INgxFormValues, NgxFormInputTypes } from '@ngx-form';

export const PeriodInputs: (NgxFormInputTypes | NgxFormInputTypes[])[] = [
    { name: 'period-1', type: 'PERIOD', value: [new Date(), new Date(new Date().getTime() + 24 * 3600 * 1000)] },
    { name: 'period-2', type: 'PERIOD', title: 'حداقل تاریخ', optional: true, minDate: new Date() },
    { name: 'period-3', type: 'PERIOD', title: 'حداکثر تاریخ', optional: true, maxDate: new Date() },
    { name: 'period-4', type: 'PERIOD', title: 'تاریخ برابر', optional: true, equal: true },
    { name: 'period-5', type: 'PERIOD', title: 'اختیاری', optional: true },
    {
        name: 'period-6',
        type: 'PERIOD',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['period-5']?.[0] !== null,
        hint: 'در صورتی که مقدار تاریخ شروع اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'period-7',
        type: 'PERIOD',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['period-5']?.[0] !== null,
        hint: 'در صورتی که مقدار تاریخ شروع اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
    },
];
