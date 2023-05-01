import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const MaskInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'mask-1', type: 'MASK', title: 'فرمت عددی', mask: '000000-000', value: '123456-789' },
    { name: 'mask-2', type: 'MASK', title: 'آیکون', mask: '000000-000', icon: 'input', optional: true },
    { name: 'mask-3', type: 'MASK', title: 'اختیاری', mask: '000000-000', optional: true },
    {
        name: 'mask-4',
        type: 'MASK',
        title: 'غیرفعال شدن',
        mask: '000000-000',
        optional: true,
        disableOn: (values: INgxFormValues) => !!values['mask-3'],
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'mask-5',
        type: 'MASK',
        title: 'عدم نمایش',
        mask: '000000-000',
        optional: true,
        hideOn: (values: INgxFormValues) => !!values['mask-3'],
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
    },
];
