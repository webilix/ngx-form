import { INgxFormValues, NgxFormInputs } from '@ngx-form';

export const OptionListInputs: (NgxFormInputs | NgxFormInputs[])[] = [
    {
        name: 'option-list-1',
        type: 'OPTION-LIST',
        title: 'لیست گزینه‌ها',
        value: [
            { id: '1', title: 'گزینه اول' },
            { id: '2', title: 'گزینه دوم' },
            { id: '3', title: 'گزینه سوم' },
            { id: '4', title: 'گزینه چهارم' },
        ],
    },
    {
        name: 'option-list-2',
        type: 'OPTION-LIST',
        title: 'انگلیسی',
        english: true,
        value: [
            { id: '1', title: '1ST Item' },
            { id: '2', title: '2ND Item' },
        ],
    },
    { name: 'option-list-3', type: 'OPTION-LIST', title: 'کارت بانکی', format: 'BANK-CARD' },
    { name: 'option-list-4', type: 'OPTION-LIST', title: 'دامنه سایت', format: 'DOMAIN' },
    { name: 'option-list-5', type: 'OPTION-LIST', title: 'ایمیل', format: 'EMAIL' },
    { name: 'option-list-6', type: 'OPTION-LIST', title: 'آدرس آی‌پی', format: 'IP' },
    { name: 'option-list-7', type: 'OPTION-LIST', title: 'موبایل', format: 'MOBILE' },
    { name: 'option-list-8', type: 'OPTION-LIST', title: 'کد ملی', format: 'NATIONAL-CODE' },
    { name: 'option-list-9', type: 'OPTION-LIST', title: 'عبارت عددی', format: 'NUMERIC' },
    { name: 'option-list-10', type: 'OPTION-LIST', title: 'آدرس سایت', format: 'URL' },
    {
        name: 'option-list-11',
        type: 'OPTION-LIST',
        title: 'ترتیب نمایش',
        value: [
            { id: '1', title: 'گزینه اول' },
            { id: '2', title: 'گزینه دوم' },
            { id: '3', title: 'گزینه سوم' },
            { id: '4', title: 'گزینه چهارم' },
        ],
        sort: true,
    },
    { name: 'option-list-12', type: 'OPTION-LIST', title: 'مقادیر تکراری', duplicate: true },
    { name: 'option-list-13', type: 'OPTION-LIST', title: 'محدودت تعداد', minCount: 2, maxCount: 5 },
    {
        name: 'option-list-14',
        type: 'OPTION-LIST',
        title: 'غیرفعال شدن',
        disableOn: (values: INgxFormValues) => values['option-list-13']?.length === 2,
        hint: 'در صورتی که دو گزینه در محدودت تعداد مشخص شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'option-list-15',
        type: 'OPTION-LIST',
        title: 'عدم نمایش',
        hideOn: (values: INgxFormValues) => values['option-list-13']?.length === 2,
        hint: 'در صورتی که دو گزینه در محدودت تعداد مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'option-list-16',
        type: 'OPTION-LIST',
        title: 'دارای کلید اضافه',
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['option-list-13']?.length === 2,
        },
        hint: 'در صورتی که دو گزینه در محدودت تعداد مشخص شده باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
];
