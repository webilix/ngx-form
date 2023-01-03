import { Component, EventEmitter, Input, Output } from '@angular/core';

import { INgxReportInputText } from '../../../inputs';
import { NgxReportInputTypes, NgxReportOperators } from '../../../ngx-report.type';

@Component({
    selector: 'ngx-value-text',
    templateUrl: './ngx-value-text.component.html',
    styleUrls: ['./ngx-value-text.component.scss'],
})
export class NgxValueTextComponent {
    @Input() input?: NgxReportInputTypes;
    @Input() operator: NgxReportOperators | null = null;
    @Input() value: string | null = null;
    @Output() changed: EventEmitter<string | null> = new EventEmitter<string | null>();

    get en(): boolean {
        return !!(this.input && !!(this.input as INgxReportInputText).english);
    }
}
