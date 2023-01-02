import { NgModule } from '@angular/core';

import { NgxBankCardPipe } from './ngx-bank-card.pipe';
import { NgxDatePipe } from './ngx-date.pipe';
import { NgxErrorPipe } from './ngx-error.pipe';
import { NgxFileSizePipe } from './ngx-file-size.pipe';
import { NgxMobilePipe } from './ngx-mobile.pipe';

@NgModule({
    declarations: [NgxBankCardPipe, NgxDatePipe, NgxErrorPipe, NgxFileSizePipe, NgxMobilePipe],
    exports: [NgxBankCardPipe, NgxDatePipe, NgxErrorPipe, NgxFileSizePipe, NgxMobilePipe],
})
export class NgxPipeModule {}
