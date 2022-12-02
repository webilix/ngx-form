import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { JalaliDateTime, JalaliDateTimeCalendar } from '@webilix/jalali-date-time';
import { Validator } from '@webilix/validator-library';

import { INgxComponentDate } from '../../interfaces/components/ngx-component-date';

@Component({
    templateUrl: './ngx-date.component.html',
    styleUrls: ['./ngx-date.component.scss'],
})
export class NgxDateComponent implements OnInit {
    public config: INgxComponentDate = this.data.config;

    private jalali = JalaliDateTime();

    public today: string = '';
    public minDate: string = '';
    public maxDate: string = '';

    public current: string = '';
    public month: string = '';
    public calendar: JalaliDateTimeCalendar = this.jalali.calendar();

    public showMonth: boolean = false;
    public seasons: string[][] = [
        ['فروردین', 'اردیبهشت', 'خرداد'],
        ['تیر', 'مرداد', 'شهریور'],
        ['مهر', 'آبان', 'آذر'],
        ['دی', 'بهمن', 'اسفند'],
    ];

    constructor(
        @Inject(MAT_DIALOG_DATA) private readonly data: { config: INgxComponentDate },
        private readonly dialogRef: MatDialogRef<NgxDateComponent>,
    ) {}

    ngOnInit(): void {
        this.today = this.jalali.toString(new Date(), { format: 'Y-M-D' });
        this.minDate = this.config.minDate
            ? this.jalali.toString(this.config.minDate, { format: 'Y-M-D' })
            : '0000-00-00';
        this.maxDate = this.config.maxDate
            ? this.jalali.toString(this.config.maxDate, { format: 'Y-M-D' })
            : '9999-99-99';

        const value: Date | null =
            this.config.value === undefined
                ? null
                : Validator.VALUE.isDate(this.config.value)
                ? this.config.value
                : null;

        this.current = value ? this.jalali.toString(value, { format: 'Y-M-D' }) : '';
        this.month = this.jalali.toString(value || new Date(), { format: 'Y-M' });
        this.calendar = this.jalali.calendar(this.month);
    }

    changeMonth(change: number): void {
        let [year, month] = this.month.split('-').map((v: string) => +v);
        switch (change) {
            case 12:
            case -12:
                year += change === 12 ? 1 : -1;
                break;

            case 1:
            case -1:
                month += change;
                if (month === 13) {
                    year++;
                    month = 1;
                }
                if (month === 0) {
                    year--;
                    month = 12;
                }

                break;

            case 0:
                [year, month] = this.jalali
                    .toString(new Date(), { format: 'Y-M' })
                    .split('-')
                    .map((v: string) => +v);
                break;
        }

        this.month = year.toString() + '-' + month.toString().padStart(2, '0');
        this.calendar = this.jalali.calendar(this.month);
    }

    changeCalendar(year: number, month: number): void {
        this.month = year.toString() + '-' + month.toString().padStart(2, '0');
        this.calendar = this.jalali.calendar(this.month);
        this.showMonth = false;
    }

    setDate(value: string | null): void {
        if (value === null) return;

        const gregorian: string = this.jalali.gregorian(value).date;
        const date: Date = new Date(gregorian + 'T00:00:00.000');
        this.dialogRef.close(date);
    }
}
