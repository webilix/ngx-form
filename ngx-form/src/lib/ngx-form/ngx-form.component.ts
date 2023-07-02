import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { NgxMaskService } from 'ngx-mask';

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

    @Input({ required: true }) ngxForm!: INgxForm;
    @Output() protected ngxSubmit: EventEmitter<INgxFormValues> = new EventEmitter<INgxFormValues>();
    @Output() protected ngxChange: EventEmitter<INgxFormValues> = new EventEmitter<INgxFormValues>();

    protected isArray = Array.isArray;

    public formGroup: FormGroup = new FormGroup({});
    protected appearance: MatFormFieldAppearance = 'fill';
    protected inputValues: INgxFormValues = {};
    protected hiddenInputs: string[] = [];
    protected disabledButtons: string[] = [];

    constructor(
        @Inject('NGX_FORM_APPEARANCE') public readonly ngxAppearance: MatFormFieldAppearance,
        // private readonly ngxMaskPipe: NgxMaskPipe,
        private readonly ngxMaskService: NgxMaskService,
    ) {}

    ngOnInit(): void {
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
                this.checkButtons(values);
                this.ngxChange.emit(values);
            },
        });

        const values: INgxFormValues = this.getValues();
        this.checkAvailability(values);
        this.checkVisibility(values);
        this.checkButtons(values);
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

        const name: string = input.type === 'COMMENT' ? '' : input.name;
        this.formGroup.setControl(name, NgxFieldInputInfo[input.type].methods.control(input, validators));
    }

    private checkAvailability(values: INgxFormValues): void {
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
        this.ngxForm.inputs.forEach((row: NgxFormInputs | NgxFormInputs[]) => {
            const inputs: NgxFormInputs[] = Array.isArray(row) ? row : [row];
            inputs.forEach((input: NgxFormInputs) => {
                if (input.type === 'COMMENT' || !input.hideOn) return;

                const hidden: boolean = input.hideOn(values);
                hidden ? this.formGroup.get(input.name)?.disable() : this.formGroup.get(input.name)?.enable();
                if (hidden) this.hiddenInputs.push(input.name);
            });
        });
    }

    private checkButtons(values: INgxFormValues): void {
        this.disabledButtons = [];
        this.ngxForm.inputs.forEach((row: NgxFormInputs | NgxFormInputs[]) => {
            const inputs: NgxFormInputs[] = Array.isArray(row) ? row : [row];
            inputs.forEach((input: NgxFormInputs) => {
                if (input.type === 'COMMENT' || !input.button || !input.button.disableOn) return;

                const disabled: boolean = input.button.disableOn(values);
                if (disabled) this.disabledButtons.push(input.name);
            });
        });
    }

    private getValue(input: NgxFormInputs): any {
        if (input.type === 'COMMENT') return null;
        if (!this.formGroup || !this.formGroup.get(input.name)) return null;
        if (this.formGroup.get(input.name)?.disabled) return null;
        if (this.hiddenInputs.includes(input.name)) return null;

        const inputValue: any = this.formGroup.get(input.name)?.value;
        const returnValue: any = NgxFieldInputInfo[input.type].methods.value(inputValue, input);
        switch (input.type) {
            case 'MASK':
                return this.ngxMaskService.applyMask(returnValue, input.mask);

            default:
                return returnValue;
        }
    }

    private getValues(): INgxFormValues {
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
        if (this.formGroup.invalid) return;

        const values: INgxFormValues = this.getValues();
        this.ngxSubmit.emit(values);
    }
}
