import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputTextarea } from '../../inputs';

@Component({
    selector: 'ngx-input-textarea',
    templateUrl: './ngx-input-textarea.component.html',
    styleUrls: ['./ngx-input-textarea.component.scss'],
})
export class NgxInputTextareaComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputTextarea;
    @Input() appearance: MatFormFieldAppearance = 'fill';
}
