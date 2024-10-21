import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';

import { Helper } from '@webilix/helper-library';

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
    @Input({ required: true }) floatLabel!: FloatLabelType;

    public control?: FormControl;

    public unit = Helper.UNIT;

    ngOnInit(): void {
        if (this.input.type === 'COMMENT') return;
        this.control = this.group.get(this.input.name) as FormControl;
    }
}
