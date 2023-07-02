import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputName } from '../../../inputs';

@Component({
    selector: 'ngx-input-name',
    templateUrl: './ngx-input-name.component.html',
    styleUrls: ['./ngx-input-name.component.scss'],
})
export class NgxInputNameComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputName;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    public first: string = '';
    public last: string = '';

    ngOnInit(): void {
        this.setValues();
    }

    setValues(): void {
        const value: { first: string; last: string } | null = this.control.value;
        this.first = value?.first || '';
        this.last = value?.last || '';
    }

    setName(first: string, last: string): void {
        first = (first || '').trim();
        last = (last || '').trim();

        this.control.markAsTouched();
        const value: { first: string; last: string } | null = first !== '' && last !== '' ? { first, last } : null;
        this.control.setValue(value);
    }
}
