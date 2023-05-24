import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputSelect } from '../../../inputs';

@Component({
    selector: 'ngx-input-select',
    templateUrl: './ngx-input-select.component.html',
    styleUrls: ['./ngx-input-select.component.scss'],
})
export class NgxInputSelectComponent {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputSelect;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    public query: string = '';
}
