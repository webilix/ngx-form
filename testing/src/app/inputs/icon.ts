import { INgxFormValues, NgxFormInputs } from '@ngx-form';

const icons: string[] = [
    'sports_soccer',
    'sports_basketball',
    'sports_baseball',
    'sports_volleyball',
    'sports_football',
    'sports_rugby',
    'sports_golf',
];

export const IconInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'icon-1', type: 'ICON', value: 'sports_soccer', icons },
    { name: 'icon-2', type: 'ICON', title: 'اختیاری', icons, optional: true },
    {
        name: 'icon-3',
        type: 'ICON',
        title: 'غیرفعال شدن',
        icons,
        optional: true,
        disableOn: (values: INgxFormValues) => values['icon-2'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'icon-4',
        type: 'ICON',
        title: 'عدم نمایش',
        icons,
        optional: true,
        hideOn: (values: INgxFormValues) => values['icon-2'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'icon-5',
        type: 'ICON',
        title: 'دارای کلید اضافه',
        icons,
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['icon-2'] !== null,
        },
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
];
