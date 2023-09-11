import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormInputSelect } from '../../../inputs';
import { INgxFormOption, INgxFormOptionGroup } from '../../../interfaces';
import { MatSelect } from '@angular/material/select';

@Component({
    selector: 'ngx-input-select',
    templateUrl: './ngx-input-select.component.html',
    styleUrls: ['./ngx-input-select.component.scss'],
})
export class NgxInputSelectComponent implements OnInit, AfterViewInit {
    @Input({ required: true }) control!: FormControl;
    @Input({ required: true }) input!: INgxFormInputSelect;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    @ViewChild('multiSelectInput') multiSelectInput?: MatSelect;

    public options: INgxFormOption[] = [];
    public groups: INgxFormOptionGroup[] = [];
    public groupIndex: number | null = null;

    public multiSelectInputClose: boolean = false;
    public query: string = '';

    ngOnInit(): void {
        this.options = this.input.options;
        this.groups = this.input.groups || [];
    }

    ngAfterViewInit(): void {
        if (!this.multiSelectInput || this.groups.length === 0) return;

        this.multiSelectInput.openedChange.subscribe({
            next: (open: boolean) => {
                if (!open || !this.multiSelectInputClose) return;

                this.multiSelectInput?.close();
                this.multiSelectInputClose = false;
            },
        });
    }

    checkPanel(): void {
        if (!this.multiSelectInput) return;

        this.multiSelectInputClose = true;
    }

    selectGroup(index?: number): void {
        this.groupIndex = index === undefined ? null : index;
        if (index === undefined || !this.groups[index]) this.options = this.input.options;
        else this.options = this.input.options.filter((option) => this.groups[index].ids.includes(option.id));

        const options: string[] = this.options.map((option) => option.id);
        this.control.setValue(options.includes(this.control.value) ? this.control.value : null);
        this.control.markAsUntouched();
    }
}
