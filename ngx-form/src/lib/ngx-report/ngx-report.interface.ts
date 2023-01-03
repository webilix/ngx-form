import { NgxReportOperators } from './ngx-report.type';

export interface INgxReportCondition {
    input: string | null;
    operator: NgxReportOperators | null;
    value: any;
}

export interface INgxReport {
    join: 'AND' | 'OR';
    conditions: (INgxReport | INgxReportCondition)[];
}
