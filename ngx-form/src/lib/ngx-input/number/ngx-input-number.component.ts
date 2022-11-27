import { Component, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { INgxFormInputNumber } from '../../inputs';

@Component({
    selector: 'ngx-input-number',
    templateUrl: './ngx-input-number.component.html',
    styleUrls: ['./ngx-input-number.component.scss'],
})
export class NgxInputNumberComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputNumber;

    constructor(@Inject('NGX_APPEARANCE') public readonly appearance: 'fill' | 'outline') {}
}
