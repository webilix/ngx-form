import { INgxFormValues, NgxFormRow } from '@ngx-form';

const options: string[] = ['سیمیلیس', 'مپانگا', 'کت اتو', 'پلکو'];

export const AutoCompleteInputs: NgxFormRow[] = [
    { name: 'auto-complete-1', type: 'AUTO-COMPLETE', title: 'لیست تکمیلی', value: 'پلکو', options: options },
    { name: 'auto-complete-2', type: 'AUTO-COMPLETE', title: 'اختیاری', options: options, optional: true },
    {
        name: 'auto-complete-3',
        type: 'AUTO-COMPLETE',
        title: 'انگلیسی',
        options: ['1ST', '2ND', '3RD', '4TH'],
        optional: true,
        english: true,
    },
    {
        name: 'auto-complete-4',
        type: 'AUTO-COMPLETE',
        title: 'غیرفعال شدن',
        options: options,
        optional: true,
        disableOn: (values: INgxFormValues) => values['auto-complete-2'] === 'سیمیلیس',
        hint: 'در صورتی که مقدار اختیاری سیمیلیس باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'auto-complete-5',
        type: 'AUTO-COMPLETE',
        title: 'عدم نمایش',
        options: options,
        optional: true,
        hideOn: (values: INgxFormValues) => values['auto-complete-2'] === 'سیمیلیس',
        hint: 'در صورتی که مقدار اختیاری سیمیلیس باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'auto-complete-6',
        type: 'AUTO-COMPLETE',
        title: 'دارای کلید اضافه',
        options: options,
        optional: true,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['auto-complete-2'] === 'سیمیلیس',
        },
        hint: 'در صورتی که مقدار اختیاری سیمیلیس باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'auto-complete-7',
        type: 'AUTO-COMPLETE',
        title: 'دارای توضیحات',
        options: options,
        optional: true,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
