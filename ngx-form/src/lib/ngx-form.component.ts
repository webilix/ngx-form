import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';

import { INgxConfig } from './interfaces/ngx-config';
import { NgxFieldInputInfo } from './interfaces/ngx-info';

import { INgxForm, INgxFormValues } from './ngx-form.interfaces';
import { NgxFormInputTypes } from './ngx-form.types';

@Component({
    selector: 'ngx-form',
    templateUrl: './ngx-form.component.html',
    styleUrls: ['./ngx-form.component.scss'],
})
export class NgxFormComponent implements OnInit {
    @ViewChild('formObject') ngForm?: NgForm;

    @Input() ngxForm?: INgxForm;
    @Output() protected ngxSubmit: EventEmitter<INgxFormValues> = new EventEmitter<INgxFormValues>();

    protected isArray = Array.isArray;

    public formGroup: FormGroup = new FormGroup({});
    protected inputValues: INgxFormValues = {};
    protected hiddenInputs: string[] = [];

    constructor(@Inject('NGX_CONFIG') private readonly ngxConfig: INgxConfig) {}

    ngOnInit(): void {
        if (!this.ngxForm) return;

        this.formGroup = new FormGroup({});
        this.ngxForm.inputs.forEach((row: NgxFormInputTypes | NgxFormInputTypes[]) => {
            const inputs: NgxFormInputTypes[] = Array.isArray(row) ? row : [row];
            inputs.forEach((input: NgxFormInputTypes) => this.setInput(input));
        });

        this.checkAvailability();
        this.checkVisibility();

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
                this.checkAvailability();
                this.checkVisibility();
            },
        });

        this.setStyles();
    }

    private setInput(input: NgxFormInputTypes): void {
        const validators: ValidatorFn[] = input.optional ? [] : [Validators.required];
        this.formGroup.setControl(input.name, NgxFieldInputInfo[input.type].methods.control(input, validators));
    }

    private checkAvailability(): void {
        if (!this.ngxForm) return;
        this.ngxForm.inputs.forEach((row: NgxFormInputTypes | NgxFormInputTypes[]) => {
            const inputs: NgxFormInputTypes[] = Array.isArray(row) ? row : [row];
            inputs.forEach((input: NgxFormInputTypes) => {
                if (!input.disableOn) return;

                const disabled: boolean = input.disableOn(this.formGroup.value);
                disabled ? this.formGroup.get(input.name)?.disable() : this.formGroup.get(input.name)?.enable();
            });
        });
    }

    private checkVisibility(): void {
        this.hiddenInputs = [];

        if (!this.ngxForm) return;
        this.ngxForm.inputs.forEach((row: NgxFormInputTypes | NgxFormInputTypes[]) => {
            const inputs: NgxFormInputTypes[] = Array.isArray(row) ? row : [row];
            inputs.forEach((input: NgxFormInputTypes) => {
                if (!input.hideOn) return;

                const hidden: boolean = input.hideOn(this.formGroup.value);
                hidden ? this.formGroup.get(input.name)?.disable() : this.formGroup.get(input.name)?.enable();
                if (hidden) this.hiddenInputs.push(input.name);
            });
        });
    }

    private getValue(input: NgxFormInputTypes): any {
        if (!this.formGroup || !this.formGroup.get(input.name)) return null;
        if (this.formGroup.get(input.name)?.disabled) return null;
        if (this.hiddenInputs.includes(input.name)) return null;

        const value: any = this.formGroup.get(input.name)?.value;
        return NgxFieldInputInfo[input.type].methods.value(value, input);
    }

    protected checkValues(): void {
        this.formGroup.markAllAsTouched();
        if (!this.ngxForm || this.formGroup.invalid) return;

        const values: INgxFormValues = {};
        this.ngxForm.inputs.forEach((row: NgxFormInputTypes | NgxFormInputTypes[]) => {
            const inputs: NgxFormInputTypes[] = Array.isArray(row) ? row : [row];
            inputs.forEach((input: NgxFormInputTypes) => (values[input.name] = this.getValue(input)));
        });
        this.ngxSubmit.emit(values);
    }

    private setStyles(): void {
        const root: string =
            ':root {' +
            `--ngxFaFont:${this.ngxConfig.faFont};` +
            `--ngxEnFont:${this.ngxConfig.enFont};` +
            `--ngxIconFont:${this.ngxConfig.iconFont};` +
            `--ngxIconSize:${this.ngxConfig.iconSize};` +
            `--ngxIconColor:${this.ngxConfig.iconColor};` +
            '}';

        const style: HTMLStyleElement = document.createElement('style');
        style.innerHTML = root;
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}
