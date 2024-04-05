import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { Helper, IBank } from '@webilix/helper-library';

import { INgxFormInputBankCard } from '../../../inputs';

@Component({
    selector: 'ngx-input-bank-card',
    templateUrl: './ngx-input-bank-card.component.html',
    styleUrls: ['./ngx-input-bank-card.component.scss'],
})
export class NgxInputBankCardComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputBankCard;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    public bank: string = '';

    public inputTransformFn = (value: any): string => Helper.STRING.changeNumbers(value.toString(), 'EN');

    ngOnInit(): void {
        this.setBank(this.input.value || '');
    }

    setBank(card: string): void {
        card = card.replace(/-/g, '').substring(0, 6);

        const bank: IBank | null = Helper.BANK.findCard(card);
        this.bank = bank?.title || '';
    }
}
