import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { JalaliDateTime } from '@webilix/jalali-date-time';

import { INgxDate, NgxDateService } from '../../../../ngx-date';

import { INgxFormInputDate } from '../../../inputs';

@Component({
    selector: 'ngx-input-date',
    templateUrl: './ngx-input-date.component.html',
    styleUrls: ['./ngx-input-date.component.scss'],
})
export class NgxInputDateComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputDate;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    public hours: string[] = [...Array(24).keys()].map((index: number) => index.toString().padStart(2, '0'));
    public hour: string = '';
    public minutes: string[] = [...Array(60).keys()].map((index: number) => index.toString().padStart(2, '0'));
    public minute: string = '';

    private jalali = JalaliDateTime();
    private default: { value: Date; day: string } = { value: new Date(), day: '' };

    constructor(private readonly ngxDateService: NgxDateService) {}

    ngOnInit(): void {
        this.hour = this.jalali.toString(this.control.value || new Date(), { format: 'H' });
        this.minute = this.jalali.toString(this.control.value || new Date(), { format: 'I' });
        if (this.control.value) {
            this.default.value = this.control.value;
            this.default.day = this.jalali.toString(this.control.value, { format: 'Y-M-D' });
        }
    }

    setDate(): void {
        if (this.control.disabled) return;

        const config: INgxDate = {
            title: this.input.title,
            value: this.control.value,
            minDate: this.input.minDate,
            maxDate: this.input.maxDate,
        };
        this.ngxDateService.getDate(config).then(
            (date: Date) => this.setValue(date),
            () => {},
        );
    }

    setValue(date: Date): void {
        if (this.control.disabled) return;

        const day: string = this.jalali.toString(date, { format: 'Y-M-D' });
        if (day === this.default.day) date = this.default.value;

        if (this.input.hour) {
            date = this.jalali.periodDay(1, date).from;
            date = new Date(date.getTime() + (+this.hour * 60 + +this.minute) * 60 * 1000);
        }

        this.control.setValue(date);
        this.control.markAsTouched();
    }
}
