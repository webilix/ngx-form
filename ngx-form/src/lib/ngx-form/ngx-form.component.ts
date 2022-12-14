import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { NgxFieldInputInfo } from './interfaces';

import { INgxForm, INgxFormValues } from './ngx-form.interface';
import { NgxFormInputs } from './ngx-form.type';

@Component({
    selector: 'ngx-form',
    templateUrl: './ngx-form.component.html',
    styleUrls: ['./ngx-form.component.scss'],
})
export class NgxFormComponent implements OnInit {
    @ViewChild('formObject') ngForm?: NgForm;

    @Input() ngxForm?: INgxForm;
    @Output() protected ngxSubmit: EventEmitter<INgxFormValues> = new EventEmitter<INgxFormValues>();
    @Output() protected ngxChange: EventEmitter<INgxFormValues> = new EventEmitter<INgxFormValues>();

    protected isArray = Array.isArray;

    public formGroup: FormGroup = new FormGroup({});
    protected appearance: MatFormFieldAppearance = 'fill';
    protected inputValues: INgxFormValues = {};
    protected hiddenInputs: string[] = [];

    constructor(@Inject('NGX_FORM_APPEARANCE') public readonly ngxAppearance: MatFormFieldAppearance) {}

    ngOnInit(): void {
        if (!this.ngxForm) return;

        this.appearance = this.ngxForm.appearance || this.ngxAppearance;

        this.formGroup = new FormGroup({});
        this.ngxForm.inputs.forEach((row: NgxFormInputs | NgxFormInputs[]) => {
            const inputs: NgxFormInputs[] = Array.isArray(row) ? row : [row];
            inputs.forEach((input: NgxFormInputs) => this.setInput(input));
        });

        this.formGroup.valueChanges.subscribe({
            next: () => {
                let check: boolean = false;
                [...Object.keys(this.inputValues), ...Object.keys(this.formGroup.value)]
                    .filter((key: string, index: number, arr: string[]) => arr.indexOf(key) === index)
                    .forEach((key: string) => {
                        if (this.formGroup.value[key] !== this.inputValues[key]) check = true;
                    });
                if (!check) return;

                this.inputValues = { ...this.formGroup.value };
                const values: INgxFormValues = this.getValues();
                this.checkAvailability(values);
                this.checkVisibility(values);
                this.ngxChange.emit(values);
            },
        });

        const values: INgxFormValues = this.getValues();
        this.checkAvailability(values);
        this.checkVisibility(values);
    }

    private setInput(input: NgxFormInputs): void {
        const validators: ValidatorFn[] =
            input.type === 'COMMENT' ||
            input.type === 'CHECKBOX' ||
            input.type === 'LIST' ||
            input.type === 'MULTI-FILE' ||
            input.type === 'MULTI-SELECT' ||
            input.type === 'OPTION-LIST' ||
            input.type === 'TAG' ||
            input.optional
                ? []
                : [Validators.required];
        this.formGroup.setControl(input.name, NgxFieldInputInfo[input.type].methods.control(input, validators));
    }

    private checkAvailability(values: INgxFormValues): void {
        if (!this.ngxForm) return;

        this.ngxForm.inputs.forEach((row: NgxFormInputs | NgxFormInputs[]) => {
            const inputs: NgxFormInputs[] = Array.isArray(row) ? row : [row];
            inputs.forEach((input: NgxFormInputs) => {
                if (input.type === 'COMMENT' || !input.disableOn) return;

                const disabled: boolean = input.disableOn(values);
                disabled ? this.formGroup.get(input.name)?.disable() : this.formGroup.get(input.name)?.enable();
            });
        });
    }

    private checkVisibility(values: INgxFormValues): void {
        this.hiddenInputs = [];
        if (!this.ngxForm) return;

        this.ngxForm.inputs.forEach((row: NgxFormInputs | NgxFormInputs[]) => {
            const inputs: NgxFormInputs[] = Array.isArray(row) ? row : [row];
            inputs.forEach((input: NgxFormInputs) => {
                if (!input.hideOn) return;

                const hidden: boolean = input.hideOn(values);
                hidden ? this.formGroup.get(input.name)?.disable() : this.formGroup.get(input.name)?.enable();
                if (hidden) this.hiddenInputs.push(input.name);
            });
        });
    }

    private getValue(input: NgxFormInputs): any {
        if (!this.formGroup || !this.formGroup.get(input.name)) return null;
        if (this.formGroup.get(input.name)?.disabled) return null;
        if (this.hiddenInputs.includes(input.name)) return null;

        const value: any = this.formGroup.get(input.name)?.value;
        return NgxFieldInputInfo[input.type].methods.value(value, input);
    }

    private getValues(): INgxFormValues {
        if (!this.ngxForm) return {};

        const values: INgxFormValues = {};
        this.ngxForm.inputs.forEach((row: NgxFormInputs | NgxFormInputs[]) => {
            const inputs: NgxFormInputs[] = Array.isArray(row) ? row : [row];
            inputs.forEach((input: NgxFormInputs) => {
                if (input.type === 'COMMENT') return;
                values[input.name] = this.formGroup.get(input.name)?.errors === null ? this.getValue(input) : null;
            });
        });
        return values;
    }

    protected checkValues(): void {
        this.formGroup.markAllAsTouched();
        if (!this.ngxForm || this.formGroup.invalid) return;

        const values: INgxFormValues = this.getValues();
        this.ngxSubmit.emit(values);
    }
}
