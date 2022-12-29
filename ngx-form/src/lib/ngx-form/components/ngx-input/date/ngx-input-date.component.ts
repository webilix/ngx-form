import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxDate, NgxDateService } from '../../../../ngx-date';

import { INgxFormInputDate } from '../../../inputs';

@Component({
    selector: 'ngx-input-date',
    templateUrl: './ngx-input-date.component.html',
    styleUrls: ['./ngx-input-date.component.scss'],
})
export class NgxInputDateComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputDate;
    @Input() appearance: MatFormFieldAppearance = 'fill';

    constructor(private readonly ngxDateService: NgxDateService) {}

    setDate(): void {
        if (!this.input || !this.control || this.control.disabled) return;

        const config: INgxDate = {
            title: this.input.title,
            value: this.control.value,
            minDate: this.input.minDate,
            maxDate: this.input.maxDate,
        };
        this.ngxDateService.getDate(config).then(
            (date: Date) => {
                this.control?.setValue(date);
                this.control?.markAsTouched();
            },
            () => {},
        );
    }
}
