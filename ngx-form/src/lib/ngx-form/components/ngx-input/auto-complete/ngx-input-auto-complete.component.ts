import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { map, Observable, startWith } from 'rxjs';

import { INgxFormInputAutoComplete } from '../../../inputs';

@Component({
    selector: 'ngx-input-auto-complete',
    templateUrl: './ngx-input-auto-complete.component.html',
    styleUrls: ['./ngx-input-auto-complete.component.scss'],
})
export class NgxInputAutoCompleteComponent implements OnInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputAutoComplete;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    public filtered: Observable<string[]> = new Observable<string[]>();

    ngOnInit(): void {
        this.filtered = this.control.valueChanges.pipe(
            startWith(''),
            map((value) => this.filter(value || '')),
        );
    }

    private filter(value: string): string[] {
        value = value.toLowerCase();
        return this.input.options.filter((option) => option.toLowerCase().includes(value));
    }
}
