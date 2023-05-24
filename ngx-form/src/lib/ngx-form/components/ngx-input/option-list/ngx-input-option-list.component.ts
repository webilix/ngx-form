import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputOptionList } from '../../../inputs';
import { INgxFormOption } from '../../../interfaces';

@Component({
    selector: 'ngx-input-option-list',
    templateUrl: './ngx-input-option-list.component.html',
    styleUrls: ['./ngx-input-option-list.component.scss'],
})
export class NgxInputOptionListComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputOptionList;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    public values: INgxFormOption[] = [];

    ngOnInit(): void {
        this.control.valueChanges.subscribe({
            next: () => this.setValues(),
        });
        this.setValues();
    }

    setValues(): void {
        this.values = Array.isArray(this.control.value) ? this.control.value : [];
    }

    getValues(values: INgxFormOption[]): { id: string | null; title: string }[] {
        return values.map((value: INgxFormOption) => ({ id: value.id || null, title: value.title }));
    }

    drop(event: CdkDragDrop<string>): void {
        if (event.previousIndex === event.currentIndex) return;

        moveItemInArray(this.values, event.previousIndex, event.currentIndex);
        this.control.setValue(this.getValues(this.values));
        this.control.markAsTouched();
    }

    addItem(item: string): void {
        this.values.push({ id: '', title: item });
        this.control.setValue(this.getValues(this.values));
        this.control.markAsTouched();
    }

    updateItem(index: number, item: string): void {
        if (!this.values[index]) return;

        this.values[index].title = item;
        this.control.setValue(this.getValues(this.values));
        this.control.markAsTouched();
    }

    deleteItem(index: number): void {
        if (!this.values[index]) return;

        this.values.splice(index, 1);
        this.control.setValue(this.getValues(this.values));
        this.control.markAsTouched();
    }
}
