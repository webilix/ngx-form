import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxCoordinates, INgxCoordinatesConfig, NgxCoordinatesService } from '../../../../ngx-coordinates';

import { INgxFormInputCoordinates } from '../../../inputs';

@Component({
    selector: 'ngx-input-coordinates',
    templateUrl: './ngx-input-coordinates.component.html',
    styleUrls: ['./ngx-input-coordinates.component.scss'],
})
export class NgxInputCoordinatesComponent {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputCoordinates;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;
    @Input({ required: true }) floatLabel!: FloatLabelType;

    constructor(private readonly ngxCoordinatesService: NgxCoordinatesService) {}

    setCoordinates(): void {
        if (this.control.disabled) return;

        const config: INgxCoordinatesConfig = {
            title: this.input.title,
            value: this.control.value,
            center: this.input.center,
            zoom: this.input.zoom,
        };
        this.ngxCoordinatesService.getCoordinates(config).then((coordinates: INgxCoordinates) => {
            this.control.setValue(coordinates);
            this.control.markAsTouched();
        });
    }
}
