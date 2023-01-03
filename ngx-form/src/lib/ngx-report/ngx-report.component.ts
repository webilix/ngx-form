import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { INgxReport } from './ngx-report.interface';
import { NgxReportService } from './ngx-report.service';
import { NgxReportInputTypes } from './ngx-report.type';

@Component({
    selector: 'ngx-report',
    templateUrl: './ngx-report.component.html',
    styleUrls: ['./ngx-report.component.scss'],
})
export class NgxReportComponent implements OnInit {
    @Input() ngxInputs: NgxReportInputTypes[] = [];
    @Input() ngxReport: INgxReport | null = null;
    @Output() ngxReportChange: EventEmitter<INgxReport | null> = new EventEmitter<INgxReport | null>();
    @Output() changed: EventEmitter<INgxReport> = new EventEmitter<INgxReport>();

    public report: INgxReport = { join: 'AND', conditions: [] };
    private firstCheck: boolean = true;

    constructor(private readonly ngxReportService: NgxReportService) {}

    ngOnInit(): void {
        this.report =
            !this.ngxReport || !this.ngxReport.join || !Array.isArray(this.ngxReport.conditions)
                ? { join: 'AND', conditions: [] }
                : this.ngxReport;

        this.setReport();
    }

    clone(report: INgxReport): INgxReport {
        return {
            join: report.join,
            conditions: report.conditions.map((condition) => {
                return this.ngxReportService.isGroup(condition)
                    ? this.clone(condition as INgxReport)
                    : { ...condition };
            }),
        };
    }

    setReport(): void {
        this.ngxReport = this.ngxReportService.hasError(this.ngxInputs, this.report) ? null : this.clone(this.report);
        this.ngxReportChange.emit(this.ngxReport);
        if (!this.firstCheck && this.ngxReport !== null) this.changed.emit(this.ngxReport);

        this.firstCheck = false;
    }
}
