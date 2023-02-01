import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RegX } from '@webilix/regex-library';
import { Helper } from '@webilix/helper-library';

import { NgxReportInputs, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-data',
    templateUrl: './ngx-value-data.component.html',
    styleUrls: ['./ngx-value-data.component.scss'],
})
export class NgxValueDataComponent implements OnInit {
    @Input() input?: NgxReportInputs;
    @Input() operator: NgxReportOperators | null = null;
    @Input() value: string | null = null;
    @Output() changed: EventEmitter<string | null> = new EventEmitter<string | null>();

    @Input() icon: string = '';
    @Input() mask?: string;

    get error(): boolean {
        if (!this.input) return false;

        switch (this.input.type) {
            case 'BANK-CARD':
                return !Helper.IS.STRING.bankCard(this.inputValue || '');

            case 'DOMAIN':
                return !RegX.DOMAIN.verify(this.inputValue || '');

            case 'EMAIL':
                return !RegX.EMAIL.verify(this.inputValue || '');

            case 'IP':
                return !RegX.IP4.verify(this.inputValue || '');

            case 'NATIONAL-CODE':
                return !Helper.IS.STRING.nationalCode(this.inputValue || '');

            default:
                return false;
        }
    }

    public inputValue: string | null = null;

    ngOnInit(): void {
        this.inputValue = this.value;
    }
}
