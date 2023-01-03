import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RegX } from '@webilix/regex-library';

import { NgxReportInputTypes, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-mobile',
    templateUrl: './ngx-value-mobile.component.html',
    styleUrls: ['./ngx-value-mobile.component.scss'],
})
export class NgxValueMobileComponent implements OnInit {
    @Input() input?: NgxReportInputTypes;
    @Input() operator: NgxReportOperators | null = null;
    @Input() value: string | null = null;
    @Output() changed: EventEmitter<string | null> = new EventEmitter<string | null>();

    public mobile: string | null = null;

    get error(): boolean {
        return !RegX.MOBILE.verify('09' + (this.mobile || ''));
    }

    ngOnInit(): void {
        this.mobile = this.value?.substring(2) || null;
    }
}
