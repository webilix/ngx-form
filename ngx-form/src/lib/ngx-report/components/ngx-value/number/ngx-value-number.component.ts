import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';

import { INgxReportInputNumber } from '../../../inputs';
import { NgxReportInputTypes, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-number',
    templateUrl: './ngx-value-number.component.html',
    styleUrls: ['./ngx-value-number.component.scss'],
})
export class NgxValueNumberComponent implements OnChanges {
    @Input() input?: NgxReportInputTypes;
    @Input() operator: NgxReportOperators | null = null;
    @Input() value: number | [number, number] | null = null;
    @Output() changed: EventEmitter<number | [number, number] | null> = new EventEmitter<
        number | [number, number] | null
    >();

    public numbers: [number | null, number | null] = [null, null];
    public decimal?: boolean;
    public negative?: boolean;

    ngOnChanges(changes: SimpleChanges): void {
        const change: SimpleChange = changes['operator'];
        if (change && (change.firstChange || change.previousValue === 'BETWEEN' || change.currentValue === 'BETWEEN'))
            this.numbers =
                this.value === null ? [null, null] : Array.isArray(this.value) ? this.value : [this.value, null];

        if (this.input) {
            const input: INgxReportInputNumber = this.input as INgxReportInputNumber;
            this.decimal = input.decimal;
            this.negative = input.negative;
        }
    }

    setNumber(index: number, event: Event): void {
        const element: HTMLInputElement = event.target as HTMLInputElement;
        const value: string = element.value.toString().trim().replace(/,/gi, '');

        if (value === '' || value === '-' || value === '.') this.numbers[index] = null;
        else this.numbers[index] = isNaN(+value) ? null : +value;
        this.setChanged();
    }

    setChanged(): void {
        const value: number | [number, number] | null =
            this.operator === 'BETWEEN'
                ? this.numbers[0] === null || this.numbers[1] === null
                    ? null
                    : [this.numbers[0], this.numbers[1]]
                : this.numbers[0];
        this.changed.emit(value);
    }
}
