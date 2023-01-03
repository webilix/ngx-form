import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { INgxReportInputSelect } from '../../../inputs';
import { INgxReportOption } from '../../../interfaces';
import { NgxReportInputs, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-option',
    templateUrl: './ngx-value-option.component.html',
    styleUrls: ['./ngx-value-option.component.scss'],
})
export class NgxValueOptionComponent implements OnInit {
    @Input() input?: NgxReportInputs;
    @Input() operator: NgxReportOperators | null = null;
    @Input() value: string[] | null = null;
    @Output() changed: EventEmitter<string[] | null> = new EventEmitter<string[] | null>();

    public options: INgxReportOption[] = [];
    public en: boolean = false;
    public ids: string[] = [];

    ngOnInit(): void {
        if (!this.input) return;

        const input: INgxReportInputSelect = this.input as INgxReportInputSelect;
        this.options = input.options;
        this.en = !!input.english;

        const ids: string[] = this.options.map((option: INgxReportOption) => option.id);
        const values: string[] = this.value && Array.isArray(this.value) ? this.value : [];
        this.ids = values.filter((value: string) => ids.includes(value));
    }

    setChanged(id: string): void {
        if (!this.ids.includes(id)) this.ids.push(id);
        else this.ids = this.ids.filter((i: string) => i !== id);
        this.changed.emit(this.ids.length === 0 ? null : this.ids);
    }
}
