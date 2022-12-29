import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { NgxDateComponent } from './ngx-date.component';
import { NgxDateService } from './ngx-date.service';

@NgModule({
    declarations: [NgxDateComponent],
    imports: [CommonModule, MatDialogModule, MatIconModule],
    providers: [NgxDateService],
})
export class NgxDateModule {}
