import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputTextarea } from '../../../inputs';

@Component({
    selector: 'ngx-input-textarea',
    templateUrl: './ngx-input-textarea.component.html',
    styleUrls: ['./ngx-input-textarea.component.scss'],
})
export class NgxInputTextareaComponent {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputTextarea;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;
    @Input({ required: true }) floatLabel!: FloatLabelType;
}
