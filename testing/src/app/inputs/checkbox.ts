import { INgxFormValues, NgxFormRow } from '@ngx-form';

export const CheckboxInputs: NgxFormRow[] = [
    { name: 'checkbox-1', type: 'CHECKBOX', message: 'گزینه یک انتخابی', value: true },
    {
        name: 'checkbox-2',
        type: 'CHECKBOX',
        message: 'گزینه یک انتخابی با عنوان طولانی برای بررسی نحوه نمایش عناوین طولانی در گزینه یک انتخابی',
    },
    { name: 'checkbox-3', type: 'CHECKBOX', message: 'English message', english: true },
    {
        name: 'checkbox-4',
        type: 'CHECKBOX',
        message: 'غیرفعال شدن',
        disableOn: (values: INgxFormValues) => values['checkbox-3'] === true,
        hint: 'در صورتی که گزینه انگلیسی انتخاب شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'checkbox-5',
        type: 'CHECKBOX',
        message: 'عدم نمایش',
        hideOn: (values: INgxFormValues) => values['checkbox-3'] === true,
        hint: 'در صورتی که گزینه انگلیسی انتخاب شده باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'checkbox-6',
        type: 'CHECKBOX',
        message: 'دارای کلید اضافه',
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['checkbox-3'] === true,
        },
        hint: 'در صورتی که گزینه انگلیسی انتخاب شده باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'checkbox-7',
        type: 'CHECKBOX',
        message: 'دارای توضیحات',
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
    { name: 'checkbox-8', type: 'CHECKBOX', message: 'نمایش اسلایدر', view: 'SLIDER' },
];
