import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {
    INgxReportOperator,
    NgxReportOperatorsInfo,
    NgxReportOperatorsList,
    NgxReportValuesInfo,
    NgxReportValueTypes,
} from '../../interfaces';

import { INgxReportCondition } from '../../ngx-report.interface';
import { NgxReportInputs, NgxReportOperators } from '../../ngx-report.type';

@Component({
    selector: 'ngx-report-condition',
    templateUrl: './ngx-report-condition.component.html',
    styleUrls: ['./ngx-report-condition.component.scss'],
})
export class NgxReportConditionComponent implements OnInit {
    @Input() inputs: NgxReportInputs[] = [];
    @Input() condition?: INgxReportCondition;
    @Output() changed: EventEmitter<void> = new EventEmitter<void>();
    @Output() deleted: EventEmitter<void> = new EventEmitter<void>();

    public operatorsInfo = NgxReportOperatorsInfo;
    public operators: NgxReportOperators[] = [];
    public input?: NgxReportInputs;

    get valueShow(): boolean {
        if (!this.condition || !this.condition.input || !this.condition.operator) return false;
        return NgxReportOperatorsInfo[this.condition.operator].value;
    }

    get valueType(): NgxReportValueTypes | null {
        if (!this.condition || !this.condition.operator || !this.input) return null;

        return (
            NgxReportValuesInfo[this.input.type].extra?.[this.condition.operator] ||
            NgxReportValuesInfo[this.input.type].default
        );
    }

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        if (this.condition?.input) {
            this.input = this.inputs.find((i: NgxReportInputs) => i.name === this.condition?.input);
            if (!this.input) {
                this.condition.input = null;
                this.condition.operator = null;
                this.condition.value = null;
                this.changed.emit();
            }
        }

        this.updateOperators();
    }

    setInput(name: string): void {
        if (!this.condition) return;
        if (!this.inputs.find((i: NgxReportInputs) => i.name === name)) return;

        this.condition.input = name;
        this.condition.operator = null;
        this.condition.value = null;
        this.changed.emit();

        this.updateOperators();
    }

    updateOperators(): void {
        this.operators = [];

        this.input = this.inputs.find((i: NgxReportInputs) => i.name === this.condition?.input);
        if (!this.input) return;

        NgxReportOperatorsList.forEach((operator: NgxReportOperators) => {
            const info: INgxReportOperator = NgxReportOperatorsInfo[operator];
            if (info.types === 'ALL' || (this.input && info.types.includes(this.input.type)))
                this.operators.push(operator);
        });

        if (this.condition && this.condition.operator && !this.operators.includes(this.condition.operator)) {
            this.condition.operator = null;
            this.condition.value = null;
            this.changed.emit();
        }
    }

    setOperator(operator: NgxReportOperators): void {
        if (!this.condition || !this.input || !this.operators.includes(operator)) return;

        this.condition.operator = operator;
        this.condition.value = null;
        this.changed.emit();
    }

    setValue(value: any): void {
        if (!this.condition) return;

        this.condition.value = value;
        this.changed.emit();
        this.changeDetectorRef.detectChanges();
    }
}
