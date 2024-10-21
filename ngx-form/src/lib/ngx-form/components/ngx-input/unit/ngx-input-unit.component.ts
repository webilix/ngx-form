import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';

import { Helper } from '@webilix/helper-library';

import {
    INgxFormInputUnitArea,
    INgxFormInputUnitLength,
    INgxFormInputUnitVolume,
    INgxFormInputUnitWeight,
} from '../../../inputs';

@Component({
    selector: 'ngx-input-unit',
    templateUrl: './ngx-input-unit.component.html',
    styleUrl: './ngx-input-unit.component.scss',
})
export class NgxInputUnitComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!:
        | INgxFormInputUnitArea
        | INgxFormInputUnitLength
        | INgxFormInputUnitVolume
        | INgxFormInputUnitWeight;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;
    @Input({ required: true }) floatLabel!: FloatLabelType;

    @Input({ required: true }) options!: { id: string; title: string }[];
    @Input({ required: false }) negative: boolean = false;

    public unit: string = '';
    public title: string = '';

    public inputTransformFn = (value: any): string => Helper.STRING.changeNumbers(value.toString(), 'EN');

    ngOnInit(): void {
        const value: { unit: string; value: number } | null = this.control.value;
        let index: number = this.options.findIndex((o) => o.id === value?.unit);
        if (index === -1) index = this.options.findIndex((o) => o.id === this.input.unit);

        this.unit = this.options[index === -1 ? 0 : index].id;
        this.title = this.options[index === -1 ? 0 : index].title;
    }

    setUnit(unit: string, input: string): void {
        const index: number = this.options.findIndex((o) => o.id === unit);
        if (index === -1) return;

        this.unit = this.options[index].id;
        this.title = this.options[index].title;
        this.setValue(input);
    }

    setValue(input: string): void {
        const value: number | null = input.length === 0 ? null : +input.replace(/,/gi, '');

        this.control.setValue(Helper.IS.number(value) ? { unit: this.unit, value } : null);
        this.control.markAllAsTouched();
    }

    updateHint(): void {}
}
