import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputIcon } from '../../../inputs';

@Component({
    selector: 'ngx-input-icon',
    templateUrl: './ngx-input-icon.component.html',
    styleUrls: ['./ngx-input-icon.component.scss'],
})
export class NgxInputIconComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputIcon;
    @Input() appearance: MatFormFieldAppearance = 'fill';

    setValue(icon: string): void {
        if (!this.control || this.control.disabled) return;

        this.control.setValue(this.control.value === icon ? null : icon);
        this.control.markAsTouched();
    }
}
