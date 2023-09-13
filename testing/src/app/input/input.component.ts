import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { INgxForm, NgxFormRow } from '@ngx-form';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnChanges {
    @Input({ required: true }) rows!: NgxFormRow[];

    public showValues = console.log;

    public loading: boolean = true;
    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [],
    };

    ngOnChanges(changes: SimpleChanges): void {
        this.loading = true;
        this.ngxForm.inputs = this.rows;
        setTimeout(() => (this.loading = false), 0);
    }
}
