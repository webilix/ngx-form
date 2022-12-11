import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './multi-file.component.html',
    styleUrls: ['./multi-file.component.scss'],
})
export class MultiFileComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'multi-file-1', type: 'MULTI-FILE' },
            { name: 'multi-file-2', type: 'MULTI-FILE', title: 'محدودت تعداد', minCount: 2, maxCount: 5 },
            {
                name: 'multi-file-3',
                type: 'MULTI-FILE',
                title: 'غیرفعال شدن',
                disableOn: (values: INgxFormValues) => values['multi-file-2']?.length === 2,
                hint: 'در صورتی که دو گزینه در محدودت تعداد مشخص شده باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'multi-file-4',
                type: 'MULTI-FILE',
                title: 'عدم نمایش',
                hideOn: (values: INgxFormValues) => values['multi-file-2']?.length === 2,
                hint: 'در صورتی که دو گزینه در محدودت تعداد مشخص شده باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
