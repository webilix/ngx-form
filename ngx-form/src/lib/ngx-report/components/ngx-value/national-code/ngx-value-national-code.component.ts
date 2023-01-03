import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Validator } from '@webilix/validator-library';

import { NgxReportInputTypes, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-national-code',
    templateUrl: './ngx-value-national-code.component.html',
    styleUrls: ['./ngx-value-national-code.component.scss'],
})
export class NgxValueNationalCodeComponent implements OnInit {
    @Input() input?: NgxReportInputTypes;
    @Input() operator: NgxReportOperators | null = null;
    @Input() value: string | null = null;
    @Output() changed: EventEmitter<string | null> = new EventEmitter<string | null>();

    public nationalCode: string | null = null;

    get error(): boolean {
        return !Validator.STRING.isNationalCode(this.nationalCode || '');
    }

    ngOnInit(): void {
        this.nationalCode = this.value;
    }
}
