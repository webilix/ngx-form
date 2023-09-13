import { INgxFormValues, NgxFormRow } from '@ngx-form';

const options = [
    { id: '1ST', title: 'گزینه اول' },
    { id: '2ND', title: 'گزینه دوم' },
    { id: '3RD', title: 'گزینه سوم' },
    { id: '4TH', title: 'گزینه چهارم' },
    { id: '5TH', title: 'گزینه پنجم' },
];
const groups = [
    { title: 'فرد', ids: ['1ST', '3RD', '5TH'] },
    { title: 'زوج', ids: ['2ND', '4TH'] },
];
const optionsEN = ['1ST', '2ND', '3RD', '4TH', '5TH'].map((en) => ({ id: en, title: en }));

export const MultiSelectInputs: NgxFormRow[] = [
    { name: 'multi-select-1', type: 'MULTI-SELECT', title: 'چند انتخابی', value: ['1ST'], options },
    { name: 'multi-select-2', type: 'MULTI-SELECT', title: 'نمایش تگ', options, view: 'TAG' },
    { name: 'multi-select-3', type: 'MULTI-SELECT', title: 'نمایش لیست کشویی', options, view: 'SELECT' },
    {
        name: 'multi-select-4',
        type: 'MULTI-SELECT',
        title: 'غیرفعال شدن',
        options,
        disableOn: (values: INgxFormValues) => values['multi-select-3']?.includes('2ND'),
        hint: 'در صورتی که گزینه نمایش لیست کشویی شامل گزینه دوم باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'multi-select-5',
        type: 'MULTI-SELECT',
        title: 'عدم نمایش',
        options,
        hideOn: (values: INgxFormValues) => values['multi-select-3']?.includes('2ND'),
        hint: 'در صورتی که گزینه نمایش لیست کشویی شامل گزینه دوم باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'multi-select-6',
        type: 'MULTI-SELECT',
        title: 'محدودیت تعداد انتخاب',
        options,
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
    // SELECT BUTTONS
    {
        name: 'multi-select-10',
        type: 'MULTI-SELECT',
        title: 'دارای انتخاب‌های همه/هیچ',
        options: [
            ...options,
            { id: '6TH', title: 'گزینه ششم' },
            { id: '7TH', title: 'گزینه هفتم' },
            { id: '8TH', title: 'گزینه هشتم' },
            { id: '9TH', title: 'گزینه نهم' },
        ],
        selectButtons: true,
    },
    {
        name: 'multi-select-11',
        type: 'MULTI-SELECT',
        title: 'دارای انتخاب‌های همه/هیچ',
        options,
        selectButtons: true,
        view: 'SELECT',
    },
    {
        name: 'multi-select-12',
        type: 'MULTI-SELECT',
        title: 'دارای انتخاب‌های همه/هیچ',
        options,
        selectButtons: true,
        view: 'TAG',
    },
    // GROUPS
    {
        name: 'multi-select-13',
        type: 'MULTI-SELECT',
        title: 'دارای گروه',
        options,
        groups,
        groupTitle: 'انتخاب گروه',
        minCount: 1,
        selectButtons: true,
    },
    {
        name: 'multi-select-14',
        type: 'MULTI-SELECT',
        title: 'دارای گروه',
        options,
        groups,
        minCount: 1,
        selectButtons: true,
        view: 'SELECT',
    },
    {
        name: 'multi-select-15',
        type: 'MULTI-SELECT',
        title: 'دارای گروه',
        options,
        groups,
        minCount: 1,
        selectButtons: true,
        view: 'TAG',
    },

    {
        name: 'multi-select-16',
        type: 'MULTI-SELECT',
        title: 'دارای کلید اضافه',
        options,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['multi-select-3']?.includes('2ND'),
        },
        hint: 'در صورتی که گزینه نمایش لیست کشویی شامل گزینه دوم باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'multi-select-17',
        type: 'MULTI-SELECT',
        title: 'دارای توضیحات',
        options,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
];
