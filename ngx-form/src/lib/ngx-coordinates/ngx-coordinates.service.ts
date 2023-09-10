import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NgxCoordinatesComponent } from './ngx-coordinates.component';
import { INgxCoordinates, INgxCoordinatesConfig } from './ngx-coordinates.interface';

@Injectable()
export class NgxCoordinatesService {
    constructor(private readonly dialog: MatDialog) {}

    getCoordinates(config: INgxCoordinatesConfig): Promise<INgxCoordinates> {
        return new Promise<INgxCoordinates>((resolve, reject) => {
            this.dialog
                .open(NgxCoordinatesComponent, {
                    autoFocus: false,
                    width: '100vw',
                    maxWidth: '100vw',
                    height: '100vh',
                    maxHeight: '100vh',
                    direction: 'rtl',
                    data: { config },
                })
                .afterClosed()
                .subscribe((coordinates?: INgxCoordinates) => (coordinates ? resolve(coordinates) : reject));
        });
    }
}
