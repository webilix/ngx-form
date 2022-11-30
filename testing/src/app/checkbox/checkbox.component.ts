import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
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
        ],
    };
}
