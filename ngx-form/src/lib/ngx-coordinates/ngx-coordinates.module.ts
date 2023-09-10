import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { NgxCoordinatesComponent } from './ngx-coordinates.component';
import { NgxCoordinatesService } from './ngx-coordinates.service';

@NgModule({
    declarations: [NgxCoordinatesComponent],
    imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule],
    providers: [NgxCoordinatesService],
})
export class NgxCoordinatesModule {}
