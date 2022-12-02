import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss'],
})
export class TagComponent {
    public showValues = console.log;

    public tags: string[] = ['اول', 'دوم', 'سوم', 'چهارم', 'پنجم'];
    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'tag-1', type: 'TAG', tags: this.tags, value: ['دوم', 'ششم'] },
            { name: 'tag-2', type: 'TAG', tags: this.tags, title: 'محدودیت تعداد', minCount: 2, maxCount: 5 },
            { name: 'tag-3', type: 'TAG', tags: this.tags, title: 'اختیاری' },
            {
                name: 'tag-4',
                type: 'TAG',
                title: 'غیرفعال شدن',
                tags: this.tags,
                disableOn: (values: INgxFormValues) => values['tag-3']?.length === 1,
                hint: 'در صورتی که یک گزینه اختیاری اضافه شده باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'tag-5',
                type: 'TAG',
                title: 'عدم نمایش',
                tags: this.tags,
                hideOn: (values: INgxFormValues) => values['tag-3']?.length === 1,
                hint: 'در صورتی که یک گزینه اختیاری اضافه شده باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
