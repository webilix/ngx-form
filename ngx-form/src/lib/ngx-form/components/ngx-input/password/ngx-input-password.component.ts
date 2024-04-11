import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputPassword } from '../../../inputs';

@Component({
    selector: 'ngx-input-password',
    templateUrl: './ngx-input-password.component.html',
    styleUrls: ['./ngx-input-password.component.scss'],
})
export class NgxInputPasswordComponent {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputPassword;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;
    @Input({ required: true }) floatLabel!: FloatLabelType;

    public passwordShow: boolean = false;
}
