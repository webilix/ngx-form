import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputFile } from '../../inputs';

@Component({
    selector: 'ngx-input-file',
    templateUrl: './ngx-input-file.component.html',
    styleUrls: ['./ngx-input-file.component.scss'],
})
export class NgxInputFileComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputFile;
    @Input() appearance: MatFormFieldAppearance = 'fill';

    public file: File | null = null;

    setFile(event: Event | null): void {
        if (!this.input || !this.control || this.control.disabled) return;

        const files: FileList | null = event === null ? null : (event.target as HTMLInputElement).files;
        this.file = files && files.length !== 0 ? files.item(0) : null;
        this.control.setValue(this.file);
        this.control.markAsTouched();
    }
}
