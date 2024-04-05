import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { Helper } from '@webilix/helper-library';

import { INgxFormInputRange } from '../../../inputs';

@Component({
    selector: 'ngx-input-range',
    templateUrl: './ngx-input-range.component.html',
    styleUrls: ['./ngx-input-range.component.scss'],
})
export class NgxInputRangeComponent {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputRange;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    public inputTransformFn = (value: any): string => Helper.STRING.changeNumbers(value.toString(), 'EN');

    setRange(min: string, max: string): void {
        const minimum: number | null = min.length === 0 ? null : +min.replace(/,/gi, '');
        const maximum: number | null = max.length === 0 ? null : +max.replace(/,/gi, '');

        this.control.setValue([Helper.IS.number(minimum) ? minimum : null, Helper.IS.number(maximum) ? maximum : null]);
        this.control.markAllAsTouched();
    }
}
