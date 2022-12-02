import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputDate } from '../../inputs';
import { INgxComponentDate } from '../../interfaces/components/ngx-component-date';
import { NgxFormService } from '../../ngx-form.service';

@Component({
    selector: 'ngx-input-date',
    templateUrl: './ngx-input-date.component.html',
    styleUrls: ['./ngx-input-date.component.scss'],
})
export class NgxInputDateComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputDate;
    @Input() appearance: MatFormFieldAppearance = 'fill';

    constructor(private readonly ngxFormService: NgxFormService) {}

    setDate(): void {
        if (!this.input || !this.control || this.control.disabled) return;

        const config: INgxComponentDate = {
            title: this.input.title,
            value: this.control.value,
            minDate: this.input.minDate,
            maxDate: this.input.maxDate,
        };
        this.ngxFormService.getDate(config).then(
            (date: Date) => {
                this.control?.setValue(date);
                this.control?.markAsTouched();
            },
            () => {},
        );
    }
}
