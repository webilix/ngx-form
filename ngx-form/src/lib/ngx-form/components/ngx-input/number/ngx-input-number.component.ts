import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';

import { Helper } from '@webilix/helper-library';

import { INgxFormInputNumber, INgxFormInputPrice } from '../../../inputs';

@Component({
    selector: 'ngx-input-number',
    templateUrl: './ngx-input-number.component.html',
    styleUrls: ['./ngx-input-number.component.scss'],
})
export class NgxInputNumberComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputNumber | INgxFormInputPrice;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;
    @Input({ required: true }) floatLabel!: FloatLabelType;

    @Input({ required: false }) icon?: string;
    @Input({ required: false }) suffix?: string;
    @Input({ required: false }) negative?: boolean;
    @Input({ required: false }) decimal?: boolean | number;
    @Input({ required: false }) text?: 'LETTER' | 'HOUR' | 'MINUTE' | 'SECOND';
    @Input({ required: false }) hideIcon?: boolean;

    public hint?: string = this.input?.hint;
    public hintLTR?: string;
    public hintView: 'INPUT' | 'TEXT' = 'INPUT';
    public isFocused: boolean = false;
    public maxLength: number = 15;

    public inputTransformFn = (value: any): string => Helper.STRING.changeNumbers(value.toString(), 'EN');

    ngOnInit(): void {
        if (!this.decimal && !this.negative && this.input.maximum)
            this.maxLength = Helper.NUMBER.format(this.input.maximum, 'EN').length;

        this.updateHint();
    }

    setValue(input: string): void {
        const value: number | null = input.length === 0 ? null : +input.replace(/,/gi, '');
        this.control.setValue(Helper.IS.number(value) ? value : null);
        this.control.markAllAsTouched();
    }

    updateHint(): void {
        this.hintLTR = undefined;
        if (this.hintView === 'INPUT' || !this.text) this.hint = this.input.hint;
        else {
            const value: number = +(this.control?.value?.toString() || '0').replace(/,/g, '');
            if (isNaN(value) || value <= 0 || value % 1 !== 0) {
                this.hint = this.input.hint;
                return;
            }

            switch (this.text) {
                case 'LETTER':
                    this.hint = Helper.NUMBER.getTitle(value);
                    break;
                default:
                    let seconds: number = value * (this.text === 'HOUR' ? 3600 : this.text === 'MINUTE' ? 60 : 1);

                    const days: number = Math.floor(seconds / (24 * 3600));
                    seconds -= days * 24 * 3600;

                    const hours: string = Math.floor(seconds / 3600)
                        .toString()
                        .padStart(2, '0');
                    seconds -= +hours * 3600;

                    const minutes: string = Math.floor(seconds / 60)
                        .toString()
                        .padStart(2, '0');
                    seconds -= +minutes * 60;

                    this.hintLTR =
                        (days ? `(${Helper.NUMBER.format(days)}) ` : '') +
                        `${hours}:${minutes}:${seconds.toString().padStart(2, '0')}`;
                    break;
            }
        }
    }
}
