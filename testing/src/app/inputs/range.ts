import { INgxFormValues, NgxFormInputTypes } from '@ngx-form';

export const RangeInputs: (NgxFormInputTypes | NgxFormInputTypes[])[] = [
    { name: 'range-1', type: 'RANGE', title: 'محدوده عددی', value: [1, 9] },
    { name: 'range-2', type: 'RANGE', title: 'مقدار برابر', optional: true, equal: true },
    { name: 'range-3', type: 'RANGE', title: 'مقدار منفی', optional: true, negative: true },
    { name: 'range-4', type: 'RANGE', title: 'مقدار اعشاری', optional: true, decimal: true },
    { name: 'range-5', type: 'RANGE', title: 'محدوده مقدار', optional: true, minimum: 10, maximum: 20 },
    { name: 'range-6', type: 'RANGE', title: 'اختیاری', optional: true },
    {
        name: 'range-7',
        type: 'RANGE',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['range-6']?.[0] !== null,
        hint: 'در صورتی که مقدار حداقل اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'range-8',
        type: 'RANGE',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['range-6']?.[0] !== null,
        hint: 'در صورتی که مقدار حداقل اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
    },
];
