import {
    Component,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { NgxMaskService } from 'ngx-mask';

import { Helper } from '@webilix/helper-library';

import { NgxFieldInputInfo } from './interfaces';

import { INgxForm, INgxFormValues, NgxFormRow } from './ngx-form.interface';
import { NgxFormInputs } from './ngx-form.type';

@Component({
    selector: 'ngx-form',
    templateUrl: './ngx-form.component.html',
    styleUrls: ['./ngx-form.component.scss'],
})
export class NgxFormComponent implements OnInit, OnChanges {
    @ViewChild('formObject') ngForm?: NgForm;

    @Input({ required: true }) ngxForm!: INgxForm;
    @Output() protected ngxSubmit: EventEmitter<INgxFormValues> = new EventEmitter<INgxFormValues>();
    @Output() protected ngxChange: EventEmitter<INgxFormValues> = new EventEmitter<INgxFormValues>();

    public formGroup: FormGroup = new FormGroup({});
    protected appearance: MatFormFieldAppearance = this.ngxAppearance;
    protected rows: (string | { input: NgxFormInputs; flex: number }[])[] = [];
    protected inputValues: INgxFormValues = {};
    protected hiddenInputs: string[] = [];
    protected disabledButtons: string[] = [];

    protected isString = (value: any): boolean => typeof value === 'string';

    constructor(
        @Inject('NGX_FORM_APPEARANCE') public readonly ngxAppearance: MatFormFieldAppearance,
        private readonly ngxMaskService: NgxMaskService,
    ) {}

    ngOnInit(): void {
        this.formGroup = new FormGroup({});
        this.getInputs().forEach((input: NgxFormInputs) => this.setInput(input));

        // Check autoFocus
        let autoFocus: boolean = false;
        this.getInputs().forEach((input: NgxFormInputs) => {
            if (!('autoFocus' in input) || !input.autoFocus) return;

            if (autoFocus || input.disableOn || input.hideOn) input.autoFocus = false;
            else autoFocus = true;
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

    ngOnChanges(changes: SimpleChanges): void {
        this.rows = [];
        this.ngxForm.inputs.forEach((row: string | NgxFormRow) =>
            this.rows.push(
                typeof row === 'string'
                    ? row
                    : Array.isArray(row)
                    ? row.map((r) => ('input' in r && 'flex' in r ? r : { input: r, flex: 1 }))
                    : 'inputs' in row && 'flex' in row
                    ? row.inputs.map((input, index: number) => ({
                          input,
                          flex: Helper.IS.number(row.flex[index]) && row.flex[index] > 0 ? row.flex[index] : 1,
                      }))
                    : [{ input: row, flex: 1 }],
            ),
        );
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

    private getInputs(): NgxFormInputs[] {
        const inputs: NgxFormInputs[] = [];
        this.ngxForm.inputs.forEach((row: string | NgxFormRow) => {
            if (typeof row === 'string') return;
            inputs.push(
                ...(Array.isArray(row)
                    ? row.map((r) => ('input' in r && 'flex' in r ? r.input : r))
                    : 'inputs' in row && 'flex' in row
                    ? row.inputs
                    : [row]),
            );
        });

        return inputs;
    }

    private checkAvailability(values: INgxFormValues): void {
        this.getInputs().forEach((input: NgxFormInputs) => {
            if (input.type === 'COMMENT' || !input.disableOn) return;

            const disabled: boolean = input.disableOn(values);
            disabled ? this.formGroup.get(input.name)?.disable() : this.formGroup.get(input.name)?.enable();
        });
    }

    private checkVisibility(values: INgxFormValues): void {
        this.hiddenInputs = [];
        this.getInputs().forEach((input: NgxFormInputs) => {
            if (input.type === 'COMMENT' || !input.hideOn) return;

            const hidden: boolean = input.hideOn(values);
            hidden ? this.formGroup.get(input.name)?.disable() : this.formGroup.get(input.name)?.enable();
            if (hidden) this.hiddenInputs.push(input.name);
        });
    }

    private checkButtons(values: INgxFormValues): void {
        this.disabledButtons = [];
        this.getInputs().forEach((input: NgxFormInputs) => {
            if (input.type === 'COMMENT' || !input.button || !input.button.disableOn) return;

            const disabled: boolean = input.button.disableOn(values);
            if (disabled) this.disabledButtons.push(input.name);
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

    protected getValues(): INgxFormValues {
        const values: INgxFormValues = {};
        this.getInputs().forEach((input: NgxFormInputs) => {
            if (input.type === 'COMMENT') return;
            values[input.name] = this.formGroup.get(input.name)?.errors === null ? this.getValue(input) : null;
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
