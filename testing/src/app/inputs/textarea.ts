import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const TextareaInputs: NgxFormRow[] = [
    { name: 'textarea-1', type: 'TEXTAREA', title: 'متن چند خطی', value: 'متن\nچند\nخطی' },
    { name: 'textarea-2', type: 'TEXTAREA', title: 'اختیاری', optional: true },
    {
        name: 'textarea-3',
        type: 'TEXTAREA',
        title: 'غیرفعال شدن',
        optional: true,
        disableOn: (values: INgxFormValues) => values['textarea-2']?.includes('متن'),
        hint: 'در صورتی که مقدار اختیاری شامل کلمه متن باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'textarea-4',
        type: 'TEXTAREA',
        title: 'عدم نمایش',
        optional: true,
        hideOn: (values: INgxFormValues) => values['textarea-2']?.includes('متن'),
        hint: 'در صورتی که مقدار اختیاری شامل کلمه متن باشد این گزینه نمایش داده نمی‌شود.',
    },
    { name: 'textarea-5', type: 'TEXTAREA', title: 'انگلیسی', english: true },
    { name: 'textarea-6', type: 'TEXTAREA', title: 'تغییر ارتفاع', optional: true, height: 35 },
    { name: 'textarea-7', type: 'TEXTAREA', title: 'ارتفاع اتوماتیک', optional: true, autoHeight: true },
    { name: 'textarea-8', type: 'TEXTAREA', title: 'شمارنده تعداد کاراکتر', optional: true, counter: true },
    { name: 'textarea-9', type: 'TEXTAREA', title: 'حداکثر طول متن', optional: true, counter: true, maxLength: 50 },
    {
        name: 'textarea-10',
        type: 'TEXTAREA',
        title: 'دارای کلید اضافه',
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['textarea-2']?.includes('متن'),
        },
        hint: 'در صورتی که مقدار اختیاری شامل کلمه متن باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'textarea-11',
        type: 'TEXTAREA',
        title: 'دارای توضیحات',
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
