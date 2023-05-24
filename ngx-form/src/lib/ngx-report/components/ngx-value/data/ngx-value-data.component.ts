import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Helper } from '@webilix/helper-library';

import { NgxReportInputs, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-data',
    templateUrl: './ngx-value-data.component.html',
    styleUrls: ['./ngx-value-data.component.scss'],
})
export class NgxValueDataComponent implements OnInit {
    @Input({ required: true }) input!: NgxReportInputs;
    @Input({ required: true }) operator!: NgxReportOperators | null;
    @Input({ required: true }) value!: string | null;
    @Output() changed: EventEmitter<string | null> = new EventEmitter<string | null>();

    @Input({ required: false }) icon: string = '';
    @Input({ required: false }) mask?: string;

    get error(): boolean {
        if (!this.input) return false;

        switch (this.input.type) {
            case 'BANK-CARD':
                return !Helper.IS.STRING.bankCard(this.inputValue || '');

            case 'DOMAIN':
                return !Helper.RE.DOMAIN.verify(this.inputValue || '');

            case 'EMAIL':
                return !Helper.RE.EMAIL.verify(this.inputValue || '');

            case 'IP':
                return !Helper.RE.IP4.verify(this.inputValue || '');

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
