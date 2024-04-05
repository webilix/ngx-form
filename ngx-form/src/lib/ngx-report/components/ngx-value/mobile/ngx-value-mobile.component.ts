import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Helper } from '@webilix/helper-library';

import { NgxReportInputs, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-mobile',
    templateUrl: './ngx-value-mobile.component.html',
    styleUrls: ['./ngx-value-mobile.component.scss'],
})
export class NgxValueMobileComponent implements OnInit {
    @Input({ required: true }) input!: NgxReportInputs;
    @Input({ required: true }) operator!: NgxReportOperators | null;
    @Input({ required: true }) value!: string | null;
    @Output() changed: EventEmitter<string | null> = new EventEmitter<string | null>();

    public mobile: string | null = null;

    get error(): boolean {
        return !Helper.RE.MOBILE.verify('09' + (this.mobile || ''));
    }

    public inputTransformFn = (value: any): string => Helper.STRING.changeNumbers(value.toString(), 'EN');

    ngOnInit(): void {
        this.mobile = this.value?.substring(2) || null;
    }
}
