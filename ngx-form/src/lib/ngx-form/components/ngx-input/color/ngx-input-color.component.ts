import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputColor } from '../../../inputs';

@Component({
    selector: 'ngx-input-color',
    templateUrl: './ngx-input-color.component.html',
    styleUrls: ['./ngx-input-color.component.scss'],
})
export class NgxInputColorComponent {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputColor;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;
}
