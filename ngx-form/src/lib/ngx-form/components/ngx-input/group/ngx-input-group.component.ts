import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputGroup } from '../../../inputs';

@Component({
    selector: 'ngx-input-group',
    templateUrl: './ngx-input-group.component.html',
    styleUrl: './ngx-input-group.component.scss',
})
export class NgxInputGroupComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputGroup;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    public columns: string = '';
    public values: string[] = [];

    ngOnInit(): void {
        const columns: number = Math.min(this.input.groups.length, this.input.columns || this.input.groups.length);
        this.columns = [...Array(columns < 1 ? this.input.groups.length : columns)].fill('1fr').join(' ');

        if (this.control.disabled) return;
        this.values = Array.isArray(this.control.value) ? this.control.value : [this.control.value];
    }

    setValue(value: string): void {
        if (this.control.disabled) return;
        this.control.markAllAsTouched();

        const checked: boolean = this.values.includes(value);
        this.values = Array.isArray(this.control.value) ? this.control.value : [this.control.value];
        if (checked) this.values = this.values.filter((v: string) => v !== value);
        else if (!this.values.includes(value)) this.values.push(value);

        const ids: string[] = this.input.groups.map((g) => g.id);
        this.values = this.values.filter((v: string) => ids.includes(v));

        this.control.setValue(this.values);
    }
}
