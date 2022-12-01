import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.scss'],
})
export class FileComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'file-1', type: 'FILE' },
            { name: 'file-2', type: 'FILE', title: 'تصاویر', optional: true, mimes: ['image/jpeg', 'image/png'] },
            { name: 'file-3', type: 'FILE', title: 'اختیاری', optional: true },
            {
                name: 'file-4',
                type: 'FILE',
                title: 'غیرفعال شدن',
                optional: true,
                disableOn: (values: INgxFormValues) => values['file-3'] !== null,
                hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'file-5',
                type: 'FILE',
                title: 'عدم نمایش',
                optional: true,
                hideOn: (values: INgxFormValues) => values['file-3'] !== null,
                hint: 'در صورتی که مقدار اختیاری مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
