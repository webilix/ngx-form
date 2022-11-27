import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: 'input[type="text"]' })
export class NgxAutocompleteDirective {
    @HostBinding('attr.autocomplete') autocomplete = 'one-time-code';
}
