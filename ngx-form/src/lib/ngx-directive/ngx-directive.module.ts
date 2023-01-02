import { NgModule } from '@angular/core';

import { NgxAutocompleteDirective } from './ngx-autocomplete.directive';
import { NgxAutoheightDirective } from './ngx-autoheight.directive';
import { NgxErrorDirective } from './ngx-error.directive';
import { NgxPersianNumberDirective } from './ngx-persian-number.directive';

@NgModule({
    declarations: [NgxAutocompleteDirective, NgxAutoheightDirective, NgxErrorDirective, NgxPersianNumberDirective],
    exports: [NgxAutocompleteDirective, NgxAutoheightDirective, NgxErrorDirective, NgxPersianNumberDirective],
})
export class NgxDirectiveModule {}
