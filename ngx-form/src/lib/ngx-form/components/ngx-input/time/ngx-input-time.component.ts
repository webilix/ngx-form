import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputTime } from '../../../inputs';

@Component({
    selector: 'ngx-input-time',
    templateUrl: './ngx-input-time.component.html',
    styleUrls: ['./ngx-input-time.component.scss'],
})
export class NgxInputTimeComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputTime;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    public hour: string | null = null;
    public minute: string = '00';
    public second: string = '00';

    ngOnInit(): void {
        if (!this.control.value) return;

        const [hour, minute, second] = this.control.value.split(':');
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    setTime(hour: string | null, minute: string, second: string): void {
        this.hour = hour;
        this.minute = minute;
        this.second = second;

        this.control.setValue(hour === null ? null : `${hour}:${minute}:${this.input.second ? second : '00'}`);
        this.control.markAllAsTouched();
    }
}
