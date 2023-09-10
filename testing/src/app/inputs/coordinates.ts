import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const CoordinatesInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'coordinates-1', type: 'COORDINATES', value: { latitude: 35.6997382, longitude: 51.3380603 } },
    { name: 'coordinates-2', type: 'COORDINATES', title: 'اختیاری', optional: true },
    {
        name: 'coordinates-3',
        type: 'COORDINATES',
        title: 'مرکز نمایش',
        center: { latitude: 32.6572754, longitude: 51.6775769 },
        optional: true,
    },
    { name: 'coordinates-4', type: 'COORDINATES', title: 'بزرگنمایی', zoom: 17, optional: true },
    {
        name: 'coordinates-5',
        type: 'COORDINATES',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['coordinates-2'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'coordinates-6',
        type: 'COORDINATES',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['coordinates-2'] !== null,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'coordinates-7',
        type: 'COORDINATES',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['coordinates-2'] !== null,
        },
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'coordinates-8',
        type: 'COORDINATES',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
