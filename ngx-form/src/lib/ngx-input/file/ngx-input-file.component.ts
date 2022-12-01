import { Component, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { INgxFormInputFile } from '../../inputs';

@Component({
    selector: 'ngx-input-file',
    templateUrl: './ngx-input-file.component.html',
    styleUrls: ['./ngx-input-file.component.scss'],
})
export class NgxInputFileComponent {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputFile;

    public file: File | null = null;

    constructor(@Inject('NGX_APPEARANCE') public readonly appearance: 'fill' | 'outline') {}

    setFile(event: Event | null): void {
        if (!this.input || !this.control || this.control.disabled) return;

        const files: FileList | null = event === null ? null : (event.target as HTMLInputElement).files;
        this.file = files && files.length !== 0 ? files.item(0) : null;
        this.control.setValue(this.file);
        this.control.markAsTouched();
    }
}
