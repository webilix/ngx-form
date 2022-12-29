import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Validator } from '@webilix/validator-library';

import { NgxDateComponent } from './ngx-date.component';
import { INgxDate } from './ngx-date.interface';

@Injectable()
export class NgxDateService {
    constructor(private readonly dialog: MatDialog) {}

    getDate(config: INgxDate): Promise<Date> {
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
