import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RegX } from '@webilix/regex-library';

import { NgxReportInputTypes, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-domain',
    templateUrl: './ngx-value-domain.component.html',
    styleUrls: ['./ngx-value-domain.component.scss'],
})
export class NgxValueDomainComponent implements OnInit {
    @Input() input?: NgxReportInputTypes;
    @Input() operator: NgxReportOperators | null = null;
    @Input() value: string | null = null;
    @Output() changed: EventEmitter<string | null> = new EventEmitter<string | null>();

    public domain: string | null = null;

    get error(): boolean {
        return !RegX.DOMAIN.verify(this.domain || '');
    }

    ngOnInit(): void {
        this.domain = this.value;
    }
}
