import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxDate, NgxDateService } from '../../../../ngx-date';

import { INgxFormInputPeriod } from '../../../inputs';

@Component({
    selector: 'ngx-input-period',
    templateUrl: './ngx-input-period.component.html',
    styleUrls: ['./ngx-input-period.component.scss'],
})
export class NgxInputPeriodComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputPeriod;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    public dates: (Date | null)[] = [];

    constructor(private readonly ngxDateService: NgxDateService) {}

    ngOnInit(): void {
        this.control.valueChanges.subscribe({
            next: () => this.setValues(),
        });
        this.setValues();
    }

    setValues(): void {
        this.dates = Array.isArray(this.control.value) ? this.control.value : [null, null];
    }

    setDate(index: number): void {
        if (index !== 0 && index !== 1) return;

        const config: INgxDate = {
            title: this.input.title,
            value: this.control.value,
            minDate: this.input.minDate,
            maxDate: this.input.maxDate,
        };
        this.ngxDateService.getDate(config).then(
            (date: Date) => {
                this.dates[index] = date;
                this.control?.setValue([...this.dates]);
                this.control?.markAsTouched();
            },
            () => {},
        );
    }

    resetDate(index: number): void {
        if (index !== 0 && index !== 1) return;

        this.dates[index] = null;
        this.control.setValue([...this.dates]);
        this.control.markAsTouched();
    }
}
