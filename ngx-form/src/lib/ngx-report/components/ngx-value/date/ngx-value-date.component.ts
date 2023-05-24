import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';

import { NgxDateService } from '../../../../ngx-date';

import { INgxReportInputDate } from '../../../inputs';
import { NgxReportInputs, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-date',
    templateUrl: './ngx-value-date.component.html',
    styleUrls: ['./ngx-value-date.component.scss'],
})
export class NgxValueDateComponent implements OnChanges {
    @Input({ required: true }) input!: NgxReportInputs;
    @Input({ required: true }) operator!: NgxReportOperators | null;
    @Input({ required: true }) value!: Date | [Date, Date] | null;
    @Output() changed: EventEmitter<Date | [Date, Date] | null> = new EventEmitter<Date | [Date, Date] | null>();

    public dates: [Date | null, Date | null] = [null, null];

    constructor(private readonly ngxDateService: NgxDateService) {}

    ngOnChanges(changes: SimpleChanges): void {
        const change: SimpleChange = changes['operator'];
        if (change && (change.firstChange || change.previousValue === 'BETWEEN' || change.currentValue === 'BETWEEN'))
            this.dates =
                this.value === null ? [null, null] : Array.isArray(this.value) ? this.value : [this.value, null];
    }

    setDate(index: number): void {
        if (!this.input) return;

        const input: INgxReportInputDate = this.input as INgxReportInputDate;
        this.ngxDateService.getDate({ title: input.title, minDate: input.minDate, maxDate: input.maxDate }).then(
            (date: Date) => {
                this.dates[index] = date;
                this.setChanged();
            },
            () => {},
        );
    }

    setChanged(): void {
        const value: Date | [Date, Date] | null =
            this.operator === 'BETWEEN'
                ? this.dates[0] === null || this.dates[1] === null
                    ? null
                    : [this.dates[0], this.dates[1]]
                : this.dates[0];
        this.changed.emit(value);
    }
}
