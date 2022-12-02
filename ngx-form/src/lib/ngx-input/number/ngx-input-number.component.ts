import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputNumber } from '../../inputs';

@Component({
    selector: 'ngx-input-number',
    templateUrl: './ngx-input-number.component.html',
    styleUrls: ['./ngx-input-number.component.scss'],
})
export class NgxInputNumberComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputNumber;
    @Input() appearance: MatFormFieldAppearance = 'fill';
}
