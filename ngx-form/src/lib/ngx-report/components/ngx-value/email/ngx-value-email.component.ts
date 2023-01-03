import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RegX } from '@webilix/regex-library';

import { NgxReportInputTypes, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-email',
    templateUrl: './ngx-value-email.component.html',
    styleUrls: ['./ngx-value-email.component.scss'],
})
export class NgxValueEmailComponent implements OnInit {
    @Input() input?: NgxReportInputTypes;
    @Input() operator: NgxReportOperators | null = null;
    @Input() value: string | null = null;
    @Output() changed: EventEmitter<string | null> = new EventEmitter<string | null>();

    public email: string | null = null;

    get error(): boolean {
        return !RegX.EMAIL.verify(this.email || '');
    }

    ngOnInit(): void {
        this.email = this.value;
    }
}
