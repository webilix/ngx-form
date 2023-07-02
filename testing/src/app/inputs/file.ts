import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const FileInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'file-1', type: 'FILE' },
    { name: 'file-2', type: 'FILE', title: 'تصاویر', optional: true, mimes: ['image/jpeg', 'image/png'] },
    { name: 'file-3', type: 'FILE', title: 'اختیاری', optional: true },
    {
        name: 'file-4',
        type: 'FILE',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['file-3'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'file-5',
        type: 'FILE',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['file-3'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'file-6',
        type: 'FILE',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['file-3'] !== null,
        },
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
];
