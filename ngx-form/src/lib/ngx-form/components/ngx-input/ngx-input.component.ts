import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { NgxFormInputs } from '../../ngx-form.type';

@Component({
    selector: 'ngx-input',
    templateUrl: './ngx-input.component.html',
    styleUrls: ['./ngx-input.component.scss'],
})
export class NgxInputComponent implements OnInit {
    @Input({ required: true }) group!: FormGroup;
    @Input({ required: true }) input!: NgxFormInputs;
    @Input({ required: true }) appearance!: MatFormFieldAppearance;

    public control?: FormControl;

    ngOnInit(): void {
        if (this.input.type === 'COMMENT') return;
        this.control = this.group.get(this.input.name) as FormControl;
    }
}
