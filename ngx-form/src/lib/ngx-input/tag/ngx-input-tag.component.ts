import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';

import { INgxFormInputTag } from '../../inputs';

@Component({
    selector: 'ngx-input-tag',
    templateUrl: './ngx-input-tag.component.html',
    styleUrls: ['./ngx-input-tag.component.scss'],
})
export class NgxInputTagComponent implements OnInit {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputTag;

    public tags: string[] = [];

    constructor(@Inject('NGX_APPEARANCE') public readonly appearance: 'fill' | 'outline') {}

    ngOnInit(): void {
        if (!this.input || !this.control) return;

        this.input.tags = this.input.tags.sort((t1: string, t2: string) => t1.localeCompare(t2));
        this.control.valueChanges.subscribe({
            next: () => this.setValues(),
        });
        this.setValues();
    }

    setValues(): void {
        if (!this.control) return;
        this.tags = Array.isArray(this.control.value) ? this.control.value : [];
    }

    filter(value: string): string[] {
        if (!this.input || this.input.tags.length === 0) return [];

        value = value.toLowerCase();
        return this.input.tags
            .filter((tag) => !this.tags.includes(tag))
            .filter((tag) => tag.toLowerCase().includes(value));
    }

    addTag(event: any, input: HTMLInputElement): void {
        const tag: string = (event.value || '').trim();
        if (!this.control || this.control.disabled || tag === '' || this.tags.includes(tag)) return;

        this.tags.push(tag);
        this.control.setValue([...this.tags]);
        this.control.markAsTouched();

        input.value = '';
    }

    selectTag(event: any): void {
        const tag: string = (event as MatAutocompleteSelectedEvent).option.viewValue.trim();
        if (!this.control || this.control.disabled || tag === '' || this.tags.includes(tag)) return;

        this.tags.push(tag);
        this.control.setValue([...this.tags]);
        this.control.markAsTouched();
    }

    deleteTag(index: number): void {
        if (!this.control || !this.tags[index]) return;

        this.tags.splice(index, 1);
        this.control.setValue([...this.tags]);
        this.control.markAsTouched();
    }
}
