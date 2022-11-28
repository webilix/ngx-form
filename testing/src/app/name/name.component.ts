import { Component } from '@angular/core';

import { INgxForm, INgxFormValues } from '@ngx-form';

@Component({
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.scss'],
})
export class NameComponent {
    public showValues = console.log;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            { name: 'name-1', type: 'NAME', value: { first: 'نام', last: 'نام خانوادگی' } },
            { name: 'name-2', type: 'NAME', optional: true },
            {
                name: 'name-3',
                type: 'NAME',
                optional: true,
                disableOn: (values: INgxFormValues) => values['name-2']?.first === 'نام',
                hint: 'در صورتی که مقدار نام در گزینه دوم، نام باشد این گزینه غیرفعال می‌شود.',
            },
            {
                name: 'name-4',
                type: 'NAME',
                optional: true,
                hideOn: (values: INgxFormValues) => values['name-2']?.last === 'نام خانوادگی',
                hint: 'در صورتی که مقدار نام خانوادگی در گزینه دوم، نام خانوادگی باشد این گزینه نمایش داده نمی‌شود.',
            },
        ],
    };
}
