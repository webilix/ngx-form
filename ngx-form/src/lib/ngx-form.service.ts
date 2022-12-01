import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Validator } from 'validator-library';

import { NgxDateComponent } from './components/ngx-date/ngx-date.component';
import { INgxComponentDate } from './interfaces/components/ngx-component-date';

@Injectable()
export class NgxFormService {
    constructor(private readonly dialog: MatDialog) {}

    getDate(config: INgxComponentDate): Promise<Date> {
        return new Promise<Date>((resolve, reject) => {
            this.dialog
                .open(NgxDateComponent, {
                    autoFocus: false,
                    width: 'calc(100vw - 4rem)',
                    maxWidth: '350px',
                    maxHeight: '90vh',
                    direction: 'rtl',
                    disableClose: true,
                    data: { config },
                })
                .afterClosed()
                .subscribe((date: Date) => {
                    if (Validator.VALUE.isDate(date)) resolve(date);
                    else reject();
                });
        });
    }
}
