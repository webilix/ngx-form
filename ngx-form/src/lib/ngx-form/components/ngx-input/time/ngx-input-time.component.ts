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
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputTime;
    @Input() appearance: MatFormFieldAppearance = 'fill';

    public hour: string | null = null;
    public minute: string = '00';
    public second: string = '00';

    ngOnInit(): void {
        if (!this.control || !this.control.value) return;

        const [hour, minute, second] = this.control.value.split(':');
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    setTime(hour: string | null, minute: string, second: string): void {
        if (!this.control || !this.input) return;

        this.hour = hour;
        this.minute = minute;
        this.second = second;

        this.control.setValue(hour === null ? null : `${hour}:${minute}:${this.input.second ? second : '00'}`);
        this.control.markAllAsTouched();
    }
}
