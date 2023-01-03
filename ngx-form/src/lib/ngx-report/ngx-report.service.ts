import { Injectable } from '@angular/core';

import { NgxReportOperatorsInfo } from './interfaces';

import { INgxReport, INgxReportCondition } from './ngx-report.interface';
import { NgxReportInputs } from './ngx-report.type';

@Injectable()
export class NgxReportService {
    isGroup(condition: INgxReport | INgxReportCondition): boolean {
        return Object.keys(condition).includes('join');
    }

    private groupHasError(report: INgxReport): boolean {
        return report.conditions.length === 0;
    }

    private conditionHasError(inputs: NgxReportInputs[], condition: INgxReportCondition): boolean {
        if (condition.input === null || condition.operator === null) return true;

        const input = inputs.find((i: NgxReportInputs) => i.name === condition.input);
        if (!input) return true;

        if (NgxReportOperatorsInfo[condition.operator].types === 'ALL') return false;

        if (!NgxReportOperatorsInfo[condition.operator].types.includes(input.type)) return true;
        if (NgxReportOperatorsInfo[condition.operator].value && condition.value === null) return true;

        return false;
    }

    hasError(inputs: NgxReportInputs[], report: INgxReport): boolean {
        if (this.groupHasError(report)) return true;

        for (let c = 0; c < report.conditions.length; c++) {
            const condition = report.conditions[c];
            if (this.isGroup(condition) && this.hasError(inputs, condition as INgxReport)) return true;
            if (!this.isGroup(condition) && this.conditionHasError(inputs, condition as INgxReportCondition))
                return true;
        }

        return false;
    }
}
