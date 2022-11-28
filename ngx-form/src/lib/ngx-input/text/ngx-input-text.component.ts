import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import {
    INgxFormInputBankCard,
    INgxFormInputDomain,
    INgxFormInputEmail,
    INgxFormInputIp,
    INgxFormInputMobile,
    INgxFormInputNationalCode,
    INgxFormInputText,
    INgxFormInputUrl,
    INgxFormInputUsername,
} from '../../inputs';

@Component({
    selector: 'ngx-input-text',
    templateUrl: './ngx-input-text.component.html',
    styleUrls: ['./ngx-input-text.component.scss'],
})
export class NgxInputTextComponent implements OnInit {
    @Input() control?: FormControl;
    @Input() input?:
        | INgxFormInputBankCard
        | INgxFormInputDomain
        | INgxFormInputEmail
        | INgxFormInputIp
        | INgxFormInputMobile
        | INgxFormInputNationalCode
        | INgxFormInputText
        | INgxFormInputUrl
        | INgxFormInputUsername;
    @Input() icon?: string;
    @Input() en: boolean = false;

    // OPTIONAL
    @Input() numeric?: boolean;
    @Input() mask?: string;
    @Input() suffix?: string | { en: string };
    @Input() maxLength?: number;
    @Input() counter?: boolean;

    public suffixText?: string;
    public suffixLang?: 'EN' | 'FA';

    constructor(@Inject('NGX_APPEARANCE') public readonly appearance: 'fill' | 'outline') {}

    ngOnInit(): void {
        if (!this.suffix) return;

        this.suffixText = typeof this.suffix === 'string' ? this.suffix : this.suffix.en;
        this.suffixLang = typeof this.suffix === 'string' ? 'FA' : 'EN';
    }
}
