import { Component, EventEmitter, Input, Output } from '@angular/core';

import { INgxReportInputText } from '../../../inputs';
import { NgxReportInputs, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-text',
    templateUrl: './ngx-value-text.component.html',
    styleUrls: ['./ngx-value-text.component.scss'],
})
export class NgxValueTextComponent {
    @Input({ required: true }) input!: NgxReportInputs;
    @Input({ required: true }) operator!: NgxReportOperators | null;
    @Input({ required: true }) value!: string | null;
    @Output() changed: EventEmitter<string | null> = new EventEmitter<string | null>();

    get en(): boolean {
        return !!(this.input && !!(this.input as INgxReportInputText).english);
    }
}
