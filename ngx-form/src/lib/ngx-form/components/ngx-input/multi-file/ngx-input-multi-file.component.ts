import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputMultiFile } from '../../../inputs';

@Component({
    selector: 'ngx-input-multi-file',
    templateUrl: './ngx-input-multi-file.component.html',
    styleUrls: ['./ngx-input-multi-file.component.scss'],
})
export class NgxInputMultiFileComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputMultiFile;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    public files: File[] = [];

    ngOnInit(): void {
        this.files = Array.isArray(this.control.value) ? this.control.value : [];
    }

    setFile(event: Event): void {
        if (this.control.disabled) return;

        const files: FileList | null = event === null ? null : (event.target as HTMLInputElement).files;
        const file: File | null = files && files.length !== 0 ? files.item(0) : null;
        if (file === null) return;

        this.files.push(file);
        this.control.setValue([...this.files]);
        this.control.markAsTouched();
    }

    deleteFile(index: number): void {
        if (this.control.disabled || !this.files[index]) return;

        this.files.splice(index, 1);
        this.control.setValue([...this.files]);
        this.control.markAsTouched();
    }
}
