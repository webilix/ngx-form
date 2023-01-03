import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RegX } from '@webilix/regex-library';

import { NgxReportInputTypes, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-ip',
    templateUrl: './ngx-value-ip.component.html',
    styleUrls: ['./ngx-value-ip.component.scss'],
})
export class NgxValueIpComponent implements OnInit {
    @Input() input?: NgxReportInputTypes;
    @Input() operator: NgxReportOperators | null = null;
    @Input() value: string | null = null;
    @Output() changed: EventEmitter<string | null> = new EventEmitter<string | null>();

    public ip: string | null = null;

    get error(): boolean {
        return !RegX.IP4.verify(this.ip || '');
    }

    ngOnInit(): void {
        this.ip = this.value;
    }
}
