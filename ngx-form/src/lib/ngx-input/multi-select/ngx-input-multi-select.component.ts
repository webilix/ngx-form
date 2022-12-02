import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputMultiSelect } from '../../inputs';

@Component({
    selector: 'ngx-input-multi-select',
    templateUrl: './ngx-input-multi-select.component.html',
    styleUrls: ['./ngx-input-multi-select.component.scss'],
})
export class NgxInputMultiSelectComponent implements OnInit {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputMultiSelect;
    @Input() appearance: MatFormFieldAppearance = 'fill';

    public values: string[] = [];

    ngOnInit(): void {
        if (!this.control || this.control.disabled || !this.input) return;
        this.values = Array.isArray(this.control.value) ? this.control.value : [this.control.value];
    }

    setValue(value: string): void {
        if (!this.control || this.control.disabled || !this.input) return;
        this.control.markAllAsTouched();

        const checked: boolean = this.values.includes(value);
        this.values = Array.isArray(this.control.value) ? this.control.value : [this.control.value];
        if (checked) this.values = this.values.filter((v: string) => v !== value);
        else if (!this.values.includes(value)) this.values.push(value);

        const ids: string[] = this.input.options.map((o) => o.id);
        this.values = this.values.filter((v: string) => ids.includes(v));

        this.control.setValue(this.values);
    }

    getValues(): string {
        if (!this.control || this.control.disabled || !this.input) return '';

        this.values = Array.isArray(this.control.value) ? this.control.value : [this.control.value];
        const ids: string[] = this.input.options.map((o) => o.id);
        this.values = this.values.filter((v: string) => ids.includes(v));

        if (this.values.length > 2) return `${this.values.length} ${this.input.english ? 'Items' : 'گزینه'}`;

        return this.input.options
            .filter((option) => this.values.includes(option.id))
            .map((option) => option.title)
            .join('، ');
    }
}
