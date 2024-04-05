import { NgModule } from '@angular/core';

import { NgxAutocompleteDirective } from './ngx-autocomplete.directive';
import { NgxAutoFocusDirective } from './ngx-autofocus.directive';
import { NgxAutoHeightDirective } from './ngx-autoheight.directive';
import { NgxErrorDirective } from './ngx-error.directive';

@NgModule({
    declarations: [NgxAutocompleteDirective, NgxAutoFocusDirective, NgxAutoHeightDirective, NgxErrorDirective],
    exports: [NgxAutocompleteDirective, NgxAutoFocusDirective, NgxAutoHeightDirective, NgxErrorDirective],
})
export class NgxDirectiveModule {}
