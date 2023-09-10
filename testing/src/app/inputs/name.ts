import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const NameInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'name-1', type: 'NAME', value: { first: 'نام', last: 'نام خانوادگی' } },
    { name: 'name-2', type: 'NAME', optional: true },
    {
        name: 'name-3',
        type: 'NAME',
        optional: true,
        disableOn: (values: INgxFormValues) => values['name-2']?.first === 'نام',
        hint: 'در صورتی که مقدار نام در گزینه دوم، نام باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'name-4',
        type: 'NAME',
        optional: true,
        hideOn: (values: INgxFormValues) => values['name-2']?.first === 'نام',
        hint: 'در صورتی که مقدار نام در گزینه دوم، نام باشد باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'name-5',
        type: 'NAME',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['name-2']?.first === 'نام',
        },
        hint: 'در صورتی که مقدار نام در گزینه دوم، نام باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'name-6',
        type: 'NAME',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
