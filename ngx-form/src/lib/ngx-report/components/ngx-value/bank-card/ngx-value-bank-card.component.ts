import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Validator } from '@webilix/validator-library';

import { NgxReportInputTypes, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-bank-card',
    templateUrl: './ngx-value-bank-card.component.html',
    styleUrls: ['./ngx-value-bank-card.component.scss'],
})
export class NgxValueBankCardComponent implements OnInit {
    @Input() input?: NgxReportInputTypes;
    @Input() operator: NgxReportOperators | null = null;
    @Input() value: string | null = null;
    @Output() changed: EventEmitter<string | null> = new EventEmitter<string | null>();

    public bankCard: string | null = null;

    get error(): boolean {
        return !Validator.STRING.isBankCard(this.bankCard || '');
    }

    ngOnInit(): void {
        this.bankCard = this.value;
    }
}
