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
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputPlate;
    @Input() appearance: MatFormFieldAppearance = 'fill';

    public letters: string[] = Helper.PLATE.letters;

    setPlate(left: string, letter: string, right: string, iran: string): void {
        if (!this.input || !this.control) return;

        this.control.setValue([left, letter, right, iran]);
        this.control.markAllAsTouched();
    }
}
