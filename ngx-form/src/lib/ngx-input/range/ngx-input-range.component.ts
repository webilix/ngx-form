import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { Validator } from '@webilix/validator-library';

import { INgxFormInputRange } from '../../inputs';

@Component({
    selector: 'ngx-input-range',
    templateUrl: './ngx-input-range.component.html',
    styleUrls: ['./ngx-input-range.component.scss'],
})
export class NgxInputRangeComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputRange;
    @Input() appearance: MatFormFieldAppearance = 'fill';

    setRange(min: string, max: string): void {
        if (!this.input || !this.control) return;

        const minimum: number | null = min.length === 0 ? null : +min.replace(/,/gi, '');
        const maximum: number | null = max.length === 0 ? null : +max.replace(/,/gi, '');

        this.control.setValue([
            Validator.VALUE.isNumber(minimum) ? minimum : null,
            Validator.VALUE.isNumber(maximum) ? maximum : null,
        ]);
        this.control.markAllAsTouched();
    }
}
