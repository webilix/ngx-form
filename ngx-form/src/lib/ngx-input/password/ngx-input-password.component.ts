import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputPassword } from '../../inputs';

@Component({
    selector: 'ngx-input-password',
    templateUrl: './ngx-input-password.component.html',
    styleUrls: ['./ngx-input-password.component.scss'],
})
export class NgxInputPasswordComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputPassword;
    @Input() appearance: MatFormFieldAppearance = 'fill';

    public passwordShow: boolean = false;
}
