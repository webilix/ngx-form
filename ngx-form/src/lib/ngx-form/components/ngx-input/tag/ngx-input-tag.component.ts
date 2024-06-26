import { Component, Input, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputTag } from '../../../inputs';

@Component({
    selector: 'ngx-input-tag',
    templateUrl: './ngx-input-tag.component.html',
    styleUrls: ['./ngx-input-tag.component.scss'],
})
export class NgxInputTagComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputTag;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;
    @Input({ required: true }) floatLabel!: FloatLabelType;

    public tags: string[] = [];

    ngOnInit(): void {
        this.input.tags = this.input.tags.sort((t1: string, t2: string) => t1.localeCompare(t2));
        this.control.valueChanges.subscribe({
            next: () => this.setValues(),
        });
        this.setValues();
    }

    setValues(): void {
        this.tags = Array.isArray(this.control.value) ? this.control.value : [];
    }

    filter(value: string): string[] {
        if (this.input.tags.length === 0) return [];

        value = value.toLowerCase();
        return this.input.tags
            .filter((tag) => !this.tags.includes(tag))
            .filter((tag) => tag.toLowerCase().includes(value));
    }

    addTag(event: any, input: HTMLInputElement): void {
        const tag: string = (event.value || '').trim();
        if (this.control.disabled || tag === '' || this.tags.includes(tag)) return;

        this.tags.push(tag);
        this.control.setValue([...this.tags]);
        this.control.markAsTouched();

        input.value = '';
    }

    selectTag(event: any, input: HTMLInputElement): void {
        const tag: string = (event as MatAutocompleteSelectedEvent).option.viewValue.trim();
        if (this.control.disabled || tag === '' || this.tags.includes(tag)) return;

        this.tags.push(tag);
        this.control.setValue([...this.tags]);
        this.control.markAsTouched();

        input.value = '';
    }

    deleteTag(index: number): void {
        if (!this.tags[index]) return;

        this.tags.splice(index, 1);
        this.control.setValue([...this.tags]);
        this.control.markAsTouched();
    }
}
