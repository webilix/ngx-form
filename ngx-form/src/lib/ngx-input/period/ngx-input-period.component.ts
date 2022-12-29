import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputPeriod } from '../../inputs';
import { INgxComponentDate } from '../../interfaces';
import { NgxFormService } from '../../ngx-form.service';

@Component({
    selector: 'ngx-input-period',
    templateUrl: './ngx-input-period.component.html',
    styleUrls: ['./ngx-input-period.component.scss'],
})
export class NgxInputPeriodComponent implements OnInit {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputPeriod;
    @Input() appearance: MatFormFieldAppearance = 'fill';

    public dates: (Date | null)[] = [];

    constructor(private readonly ngxFormService: NgxFormService) {}

    ngOnInit(): void {
        if (!this.control) return;

        this.control.valueChanges.subscribe({
            next: () => this.setValues(),
        });
        this.setValues();
    }

    setValues(): void {
        if (!this.control) return;
        this.dates = Array.isArray(this.control.value) ? this.control.value : [null, null];
    }

    setDate(index: number): void {
        if (!this.input || !this.control || (index !== 0 && index !== 1)) return;

        const config: INgxComponentDate = {
            title: this.input.title,
            value: this.control.value,
            minDate: this.input.minDate,
            maxDate: this.input.maxDate,
        };
        this.ngxFormService.getDate(config).then(
            (date: Date) => {
                this.dates[index] = date;
                this.control?.setValue([...this.dates]);
                this.control?.markAsTouched();
            },
            () => {},
        );
    }

    resetDate(index: number): void {
        if (!this.input || !this.control || (index !== 0 && index !== 1)) return;

        this.dates[index] = null;
        this.control.setValue([...this.dates]);
        this.control.markAsTouched();
    }
}
