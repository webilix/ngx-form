import { Component, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { INgxFormInputSelect } from '../../inputs';

@Component({
    selector: 'ngx-input-select',
    templateUrl: './ngx-input-select.component.html',
    styleUrls: ['./ngx-input-select.component.scss'],
})
export class NgxInputSelectComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputSelect;

    public query: string = '';

    constructor(@Inject('NGX_APPEARANCE') public readonly appearance: 'fill' | 'outline') {}
}
