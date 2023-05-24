import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputCheckbox } from '../../../inputs';

@Component({
    selector: 'ngx-input-checkbox',
    templateUrl: './ngx-input-checkbox.component.html',
    styleUrls: ['./ngx-input-checkbox.component.scss'],
})
export class NgxInputCheckboxComponent {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputCheckbox;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;
}
