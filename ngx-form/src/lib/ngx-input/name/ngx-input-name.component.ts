import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { INgxFormInputName } from '../../inputs';

@Component({
    selector: 'ngx-input-name',
    templateUrl: './ngx-input-name.component.html',
    styleUrls: ['./ngx-input-name.component.scss'],
})
export class NgxInputNameComponent implements OnInit {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputName;

    public first: string = '';
    public last: string = '';

    constructor(@Inject('NGX_APPEARANCE') public readonly appearance: 'fill' | 'outline') {}

    ngOnInit(): void {
        if (!this.control) return;

        const value: { first: string; last: string } | null = this.control.value;
        if (value === null) return;

        this.first = value.first;
        this.last = value.last;
    }

    setValue(): void {
        if (!this.control) return;

        const first: string = this.first.trim();
        const last: string = this.last.trim();

        this.control.markAsTouched();
        const value: { first: string; last: string } | null = first !== '' && last !== '' ? { first, last } : null;
        this.control.setValue(value);
    }
}
