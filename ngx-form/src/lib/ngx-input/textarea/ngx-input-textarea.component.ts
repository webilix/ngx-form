import { Component, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { INgxFormInputTextarea } from '../../inputs';

@Component({
    selector: 'ngx-input-textarea',
    templateUrl: './ngx-input-textarea.component.html',
    styleUrls: ['./ngx-input-textarea.component.scss'],
})
export class NgxInputTextareaComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputTextarea;

    constructor(@Inject('NGX_APPEARANCE') public readonly appearance: 'fill' | 'outline') {}
}
