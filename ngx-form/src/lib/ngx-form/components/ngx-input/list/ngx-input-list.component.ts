import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputList } from '../../../inputs';

@Component({
    selector: 'ngx-input-list',
    templateUrl: './ngx-input-list.component.html',
    styleUrls: ['./ngx-input-list.component.scss'],
})
export class NgxInputListComponent implements OnInit {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputList;
    @Input() appearance: MatFormFieldAppearance = 'fill';

    public values: string[] = [];

    ngOnInit(): void {
        if (!this.control) return;

        this.control.valueChanges.subscribe({
            next: () => this.setValues(),
        });
        this.setValues();
    }

    setValues(): void {
        if (!this.control) return;
        this.values = Array.isArray(this.control.value) ? this.control.value : [];
    }

    drop(event: CdkDragDrop<string>): void {
        if (!this.control || event.previousIndex === event.currentIndex) return;

        moveItemInArray(this.values, event.previousIndex, event.currentIndex);
        this.control.setValue([...this.values]);
        this.control.markAsTouched();
    }

    addItem(item: string): void {
        if (!this.control) return;

        this.values.push(item);
        this.control.setValue([...this.values]);
        this.control.markAsTouched();
    }

    updateItem(index: number, item: string): void {
        if (!this.control || !this.values[index]) return;

        this.values[index] = item;
        this.control.setValue([...this.values]);
        this.control.markAsTouched();
    }

    deleteItem(index: number): void {
        if (!this.control || !this.values[index]) return;

        this.values.splice(index, 1);
        this.control.setValue([...this.values]);
        this.control.markAsTouched();
    }
}
