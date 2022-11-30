import { Component, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { INgxFormInputCheckbox } from '../../inputs';

@Component({
    selector: 'ngx-input-checkbox',
    templateUrl: './ngx-input-checkbox.component.html',
    styleUrls: ['./ngx-input-checkbox.component.scss'],
})
export class NgxInputCheckboxComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputCheckbox;

    constructor(@Inject('NGX_APPEARANCE') public readonly appearance: 'fill' | 'outline') {}
}
