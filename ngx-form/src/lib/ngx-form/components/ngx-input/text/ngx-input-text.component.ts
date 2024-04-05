import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { Helper } from '@webilix/helper-library';

import {
    INgxFormInputDomain,
    INgxFormInputEmail,
    INgxFormInputIp,
    INgxFormInputMask,
    INgxFormInputMobile,
    INgxFormInputNationalCode,
    INgxFormInputNumeric,
    INgxFormInputText,
    INgxFormInputUrl,
    INgxFormInputUsername,
} from '../../../inputs';

@Component({
    selector: 'ngx-input-text',
    templateUrl: './ngx-input-text.component.html',
    styleUrls: ['./ngx-input-text.component.scss'],
})
export class NgxInputTextComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!:
        | INgxFormInputDomain
        | INgxFormInputEmail
        | INgxFormInputIp
        | INgxFormInputMask
        | INgxFormInputMobile
        | INgxFormInputNationalCode
        | INgxFormInputNumeric
        | INgxFormInputText
        | INgxFormInputUrl
        | INgxFormInputUsername;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    @Input({ required: false }) icon?: string;
    @Input({ required: false }) en: boolean = false;
    @Input({ required: false }) numeric?: boolean;
    @Input({ required: false }) mask?: string;
    @Input({ required: false }) suffix?: string | { en: string };
    @Input({ required: false }) maxLength?: number;
    @Input({ required: false }) counter?: boolean;

    public suffixText?: string;
    public suffixLang?: 'EN' | 'FA';

    public inputTransformFn = (value: any): string =>
        this.input.type === 'IP' ||
        this.input.type === 'MOBILE' ||
        this.input.type === 'NATIONAL-CODE' ||
        this.input.type === 'NUMERIC'
            ? Helper.STRING.changeNumbers(value.toString(), 'EN')
            : value.toString();

    ngOnInit(): void {
        if (!this.suffix) return;

        this.suffixText = typeof this.suffix === 'string' ? this.suffix : this.suffix.en;
        this.suffixLang = typeof this.suffix === 'string' ? 'FA' : 'EN';
    }
}
