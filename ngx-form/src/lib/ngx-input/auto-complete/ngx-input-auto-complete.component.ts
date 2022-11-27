import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

import { INgxFormInputAutoComplete } from '../../inputs';

@Component({
    selector: 'ngx-input-auto-complete',
    templateUrl: './ngx-input-auto-complete.component.html',
    styleUrls: ['./ngx-input-auto-complete.component.scss'],
})
export class NgxInputAutoCompleteComponent implements OnInit {
    @Input() control?: FormControl;
    @Input() input?: INgxFormInputAutoComplete;

    public filtered: Observable<string[]> = new Observable<string[]>();

    constructor(@Inject('NGX_APPEARANCE') public readonly appearance: 'fill' | 'outline') {}

    ngOnInit(): void {
        if (!this.control) return;

        this.filtered = this.control.valueChanges.pipe(
            startWith(''),
            map((value) => this.filter(value || '')),
        );
    }

    private filter(value: string): string[] {
        if (!this.input) return [];

        value = value.toLowerCase();
        return this.input.options.filter((option) => option.toLowerCase().includes(value));
    }
}
