import { INgxFormValues, NgxFormInputs } from '@ngx-form';

const options = [
    { id: '1ST', title: 'گزینه اول' },
    { id: '2ND', title: 'گزینه دوم' },
    { id: '3RD', title: 'گزینه سوم' },
    { id: '4TH', title: 'گزینه چهارم' },
    { id: '5TH', title: 'گزینه پنجم' },
];
const optionsEN = ['1ST', '2ND', '3RD', '4TH', '5TH'].map((en) => ({ id: en, title: en }));

export const MultiSelectInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    { name: 'multi-select-1', type: 'MULTI-SELECT', title: 'چند انتخابی', value: ['1ST'], options: options },
    { name: 'multi-select-2', type: 'MULTI-SELECT', title: 'نمایش تگ', options: options, view: 'TAG' },
    { name: 'multi-select-3', type: 'MULTI-SELECT', title: 'نمایش لیست کشویی', options: options, view: 'SELECT' },
    {
        name: 'multi-select-4',
        type: 'MULTI-SELECT',
        title: 'غیرفعال شدن',
        options: options,
        disableOn: (values: INgxFormValues) => values['multi-select-3']?.includes('2ND'),
        hint: 'در صورتی که گزینه نمایش لیست کشویی شامل گزینه دوم باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'multi-select-5',
        type: 'MULTI-SELECT',
        title: 'عدم نمایش',
        options: options,
        hideOn: (values: INgxFormValues) => values['multi-select-3']?.includes('2ND'),
        hint: 'در صورتی که گزینه نمایش لیست کشویی شامل گزینه دوم باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'multi-select-6',
        type: 'MULTI-SELECT',
        title: 'محدودیت تعداد انتخاب',
        options: options,
        minCount: 2,
        maxCount: 4,
    },
    {
        name: 'multi-select-7',
        type: 'MULTI-SELECT',
        title: 'انگلیسی',
        value: ['1ST'],
        options: optionsEN,
        english: true,
    },
    {
        name: 'multi-select-8',
        type: 'MULTI-SELECT',
        title: 'نمایش انگلیسی تگ',
        options: optionsEN,
        view: 'TAG',
        english: true,
    },
    {
        name: 'multi-select-9',
        type: 'MULTI-SELECT',
        title: 'نمایش انگلیسی لیست کشویی',
        options: optionsEN,
        view: 'SELECT',
        english: true,
    },
];
