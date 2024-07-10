import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { Helper } from '@webilix/helper-library';

import { INgxFormInputPlate } from '../../../inputs';

@Component({
    selector: 'ngx-input-plate',
    templateUrl: './ngx-input-plate.component.html',
    styleUrls: ['./ngx-input-plate.component.scss'],
})
export class NgxInputPlateComponent {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputPlate;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    public letters: string[] = Helper.PLATE.letters;

    public inputTransformFn = (value: any): string => Helper.STRING.changeNumbers(value.toString(), 'EN');

    setPlate(left: string, letter: string, right: string, iran: string): void {
        this.control.setValue([left, letter, right, iran]);
        this.control.markAllAsTouched();
    }

    onComplete(event: KeyboardEvent): void {
        if (event.code.substring(0, 5) !== 'Digit') return;

        const input: HTMLInputElement = event.target as HTMLInputElement;
        if (!input || input.selectionStart !== 2 || input.selectionEnd !== 2) return;

        if (!this.input.onComplete || !!this.control.errors) return;
        this.input.onComplete(this.control.value);
    }
}
