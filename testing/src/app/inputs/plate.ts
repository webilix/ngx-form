import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const PlateInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'plate-1', type: 'PLATE', value: ['12', 'ع', '345', '67'] },
    { name: 'plate-2', type: 'PLATE', title: 'اختیاری', optional: true },
    {
        name: 'plate-3',
        type: 'PLATE',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['plate-2'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'plate-4',
        type: 'PLATE',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['plate-2'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
    },
];
