import { NgModule } from '@angular/core';

import { NgxAutocompleteDirective } from './ngx-autocomplete.directive';
import { NgxAutoFocusDirective } from './ngx-autofocus.directive';
import { NgxAutoHeightDirective } from './ngx-autoheight.directive';
import { NgxErrorDirective } from './ngx-error.directive';
import { NgxPersianNumberDirective } from './ngx-persian-number.directive';

@NgModule({
    declarations: [
        NgxAutocompleteDirective,
        NgxAutoFocusDirective,
        NgxAutoHeightDirective,
        NgxErrorDirective,
        NgxPersianNumberDirective,
    ],
    exports: [
        NgxAutocompleteDirective,
        NgxAutoFocusDirective,
        NgxAutoHeightDirective,
        NgxErrorDirective,
        NgxPersianNumberDirective,
    ],
})
export class NgxDirectiveModule {}
