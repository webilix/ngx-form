import { AfterViewChecked, AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';

import { INgxFormInputMultiSelect } from '../../../inputs';
import { INgxFormOption, INgxFormOptionGroup } from '../../../interfaces';

@Component({
    selector: 'ngx-input-multi-select',
    templateUrl: './ngx-input-multi-select.component.html',
    styleUrls: ['./ngx-input-multi-select.component.scss'],
})
export class NgxInputMultiSelectComponent implements OnInit, AfterViewInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputMultiSelect;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    @ViewChild('multiSelectInput') multiSelectInput?: MatSelect;

    public options: INgxFormOption[] = [];
    public groups: INgxFormOptionGroup[] = [];
    public groupIndex: number | null = null;
    public values: string[] = [];

    public multiSelectInputClose: boolean = false;

    ngOnInit(): void {
        this.options = this.input.options;
        this.groups = this.input.groups || [];

        if (this.control.disabled) return;
        this.values = Array.isArray(this.control.value) ? this.control.value : [this.control.value];
    }

    ngAfterViewInit(): void {
        if (!this.multiSelectInput || (!this.input.selectButtons && this.groups.length === 0)) return;

        this.multiSelectInput.openedChange.subscribe({
            next: (open: boolean) => {
                if (!open || !this.multiSelectInputClose) return;

                this.multiSelectInput?.close();
                this.multiSelectInputClose = false;
            },
        });
    }

    checkPanel(): void {
        if (!this.multiSelectInput) return;

        this.multiSelectInputClose = true;
    }

    selectGroup(index?: number): void {
        this.groupIndex = index === undefined ? null : index;
        if (index === undefined || !this.groups[index]) this.options = this.input.options;
        else this.options = this.input.options.filter((option) => this.groups[index].ids.includes(option.id));

        this.values = [];
        this.control.setValue([]);
        this.control.markAsUntouched();
    }

    selectAll(): void {
        if (this.control.disabled) return;

        this.values = this.options.map((option) => option.id);
        this.control.setValue(this.values);
        this.control.markAllAsTouched();
    }

    selectNone(): void {
        if (this.control.disabled) return;

        this.values = [];
        this.control.setValue(this.values);
        this.control.markAllAsTouched();
    }

    setValue(value: string): void {
        if (this.control.disabled) return;
        this.control.markAllAsTouched();

        const checked: boolean = this.values.includes(value);
        this.values = Array.isArray(this.control.value) ? this.control.value : [this.control.value];
        if (checked) this.values = this.values.filter((v: string) => v !== value);
        else if (!this.values.includes(value)) this.values.push(value);

        const ids: string[] = this.options.map((o) => o.id);
        this.values = this.values.filter((v: string) => ids.includes(v));

        this.control.setValue(this.values);
    }

    getValues(): string {
        if (this.control.disabled) return '';

        this.values = Array.isArray(this.control.value) ? this.control.value : [this.control.value];
        const ids: string[] = this.options.map((o) => o.id);
        this.values = this.values.filter((v: string) => ids.includes(v));

        if (this.values.length > 3) return `${this.values.length} ${this.input.english ? 'Items' : 'گزینه'}`;

        return this.options
            .filter((option) => this.values.includes(option.id))
            .map((option) => option.title)
            .join('، ');
    }
}
