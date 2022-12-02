import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { INgxFormInputOptionList } from '../../inputs';
import { INgxFormOption } from '../../interfaces/ngx-option';

@Component({
    selector: 'ngx-input-option-list',
    templateUrl: './ngx-input-option-list.component.html',
    styleUrls: ['./ngx-input-option-list.component.scss'],
})
export class NgxInputOptionListComponent implements OnInit {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputOptionList;

    public values: INgxFormOption[] = [];

    constructor(@Inject('NGX_APPEARANCE') public readonly appearance: 'fill' | 'outline') {}

    ngOnInit(): void {
        if (!this.control) return;
        this.values = Array.isArray(this.control.value) ? this.control.value : [];
    }

    getValues(values: INgxFormOption[]): { id: string | null; title: string }[] {
        return values.map((value: INgxFormOption) => ({ id: value.id || null, title: value.title }));
    }

    drop(event: CdkDragDrop<string>): void {
        if (!this.control || event.previousIndex === event.currentIndex) return;

        moveItemInArray(this.values, event.previousIndex, event.currentIndex);
        this.control.setValue(this.getValues(this.values));
        this.control.markAsTouched();
    }

    addItem(item: string): void {
        if (!this.control) return;

        this.values.push({ id: '', title: item });
        this.control.setValue(this.getValues(this.values));
        this.control.markAsTouched();
    }

    updateItem(index: number, item: string): void {
        if (!this.control || !this.values[index]) return;

        this.values[index].title = item;
        this.control.setValue(this.getValues(this.values));
        this.control.markAsTouched();
    }

    deleteItem(index: number): void {
        if (!this.control || !this.values[index]) return;

        this.values.splice(index, 1);
        this.control.setValue(this.getValues(this.values));
        this.control.markAsTouched();
    }
}
