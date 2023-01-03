import { Component, EventEmitter, Input, Output } from '@angular/core';

import { INgxReport, INgxReportCondition } from '../../ngx-report.interface';
import { NgxReportService } from '../../ngx-report.service';
import { NgxReportInputTypes } from '../../ngx-report.type';

@Component({
    selector: 'ngx-report-group',
    templateUrl: './ngx-report-group.component.html',
    styleUrls: ['./ngx-report-group.component.scss'],
})
export class NgxReportGroupComponent {
    @Input() inputs: NgxReportInputTypes[] = [];
    @Input() report?: INgxReport;
    @Input() level: number = 0;
    @Output() changed: EventEmitter<void> = new EventEmitter<void>();
    @Output() deleted: EventEmitter<void> = new EventEmitter<void>();

    public isGroup = this.ngxReportService.isGroup;

    constructor(private readonly ngxReportService: NgxReportService) {}

    getReport(item: INgxReport | INgxReportCondition): INgxReport {
        return item as INgxReport;
    }

    getCondition(item: INgxReport | INgxReportCondition): INgxReportCondition {
        return item as INgxReportCondition;
    }

    setJoin(value: 'AND' | 'OR'): void {
        if (!this.report) return;

        this.report.join = value;
        this.changed.emit();
    }

    addGroup(): void {
        if (!this.report) return;

        this.report.conditions.push({ join: 'AND', conditions: [] });
        this.changed.emit();
    }

    addCondition(): void {
        if (!this.report) return;

        this.report.conditions.push({ input: null, operator: null, value: null });
        this.changed.emit();
    }

    deleteCondition(index: number): void {
        if (!this.report) return;

        this.report.conditions = this.report.conditions.filter((_, i: number) => i !== index);
        this.changed.emit();
    }
}
