import { Component, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { INgxFormInputPassword } from '../../inputs';

@Component({
    selector: 'ngx-input-password',
    templateUrl: './ngx-input-password.component.html',
    styleUrls: ['./ngx-input-password.component.scss'],
})
export class NgxInputPasswordComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputPassword;

    public passwordShow: boolean = false;

    constructor(@Inject('NGX_APPEARANCE') public readonly appearance: 'fill' | 'outline') {}
}
