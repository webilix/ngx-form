import { INgxFormValues, NgxFormRow } from '@ngx-form';

const groups = [
    { id: '1ST', title: 'گروه اول', icon: 'looks_one' },
    { id: '2ND', title: 'گروه دوم', icon: 'looks_two' },
    { id: '3RD', title: 'گروه سوم', icon: 'looks_3' },
    { id: '4TH', title: 'گروه چهارم', icon: 'looks_4' },
    { id: '5TH', title: 'گروه پنجم', icon: 'looks_5' },
];

export const GroupInputs: NgxFormRow[] = [
    { name: 'group-1', type: 'GROUP', title: 'گروه', groups, minCount: 1, value: ['2ND', '4TH'] },
    { name: 'group-2', type: 'GROUP', title: 'اختیاری', groups },
    {
        name: 'group-3',
        type: 'GROUP',
        title: 'غیرفعال شدن',
        groups,
        disableOn: (values: INgxFormValues) => values['group-2'].length !== 0,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'group-4',
        type: 'GROUP',
        title: 'عدم نمایش',
        groups,
        hideOn: (values: INgxFormValues) => values['group-2'].length !== 0,
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
    },
    {
        name: 'group-5',
        type: 'GROUP',
        title: 'دارای کلید اضافه',
        groups,
        button: {
            icon: 'add',
            click: () => console.log('EXTRA BUTTON'),
            disableOn: (values: INgxFormValues) => values['group-2'].length !== 0,
        },
        hint: 'در صورتی که مقدار اختیاری مشخص شده باشد کلید اضافه این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'group-6',
        type: 'GROUP',
        title: 'دارای توضیحات',
        groups,
        description:
            'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
            '\n' +
            'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
    },
    { name: 'group-7', type: 'GROUP', title: 'بدون آیکون', groups: groups.map((g) => ({ id: g.id, title: g.title })) },
    { name: 'group-8', type: 'GROUP', title: 'نمایش در سه ستون', groups, columns: 3 },
    { name: 'group-9', type: 'GROUP', title: 'حداکثر تعداد انتخاب', groups, maxCount: 3 },
];
