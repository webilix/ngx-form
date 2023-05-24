import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { INgxForm, NgxFormInputs } from '@ngx-form';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnChanges {
    @Input({ required: true }) inputs!: (NgxFormInputs | NgxFormInputs[])[];

    public showValues = console.log;

    public loading: boolean = true;
    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [],
    };

    ngOnChanges(changes: SimpleChanges): void {
        this.loading = true;
        this.ngxForm.inputs = this.inputs;
        setTimeout(() => (this.loading = false), 0);
    }
}
