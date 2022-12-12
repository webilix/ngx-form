import { INgxFormValues, NgxFormInputTypes } from '@ngx-form';

const tags: string[] = ['اول', 'دوم', 'سوم', 'چهارم', 'پنجم'];

export const TagInputs: (NgxFormInputTypes | NgxFormInputTypes[])[] = [
    { name: 'tag-1', type: 'TAG', tags: tags, value: ['دوم', 'ششم'] },
    { name: 'tag-2', type: 'TAG', tags: tags, title: 'محدودیت تعداد', minCount: 2, maxCount: 5 },
    { name: 'tag-3', type: 'TAG', tags: tags, title: 'اختیاری' },
    {
        name: 'tag-4',
        type: 'TAG',
        title: 'غیرفعال شدن',
        tags: tags,
        disableOn: (values: INgxFormValues) => values['tag-3']?.length === 1,
        hint: 'در صورتی که یک گزینه اختیاری اضافه شده باشد این گزینه غیرفعال می‌شود.',
    },
    {
        name: 'tag-5',
        type: 'TAG',
        title: 'عدم نمایش',
        tags: tags,
        hideOn: (values: INgxFormValues) => values['tag-3']?.length === 1,
        hint: 'در صورتی که یک گزینه اختیاری اضافه شده باشد این گزینه نمایش داده نمی‌شود.',
    },
];
