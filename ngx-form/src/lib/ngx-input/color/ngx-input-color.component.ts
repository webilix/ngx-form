import { Component, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { INgxFormInputColor } from '../../inputs';

@Component({
    selector: 'ngx-input-color',
    templateUrl: './ngx-input-color.component.html',
    styleUrls: ['./ngx-input-color.component.scss'],
})
export class NgxInputColorComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputColor;

    constructor(@Inject('NGX_APPEARANCE') public readonly appearance: 'fill' | 'outline') {}
}
