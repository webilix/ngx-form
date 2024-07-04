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
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';

import { Helper } from '@webilix/helper-library';

import { NgxFieldInputInfo } from './interfaces';

import { INgxForm, INgxFormValues, NgxFormRow } from './ngx-form.interface';
import { NgxFormService } from './ngx-form.service';
import { NgxFormInputs } from './ngx-form.type';

@Component({
    selector: 'ngx-form',
    templateUrl: './ngx-form.component.html',
    styleUrls: ['./ngx-form.scss', './ngx-form.component.scss'],
})
export class NgxFormComponent implements OnInit, OnChanges {
    @ViewChild('formObject') ngForm?: NgForm;

    @Input({ required: true }) ngxForm!: INgxForm;
    @Output() protected ngxSubmit: EventEmitter<INgxFormValues> = new EventEmitter<INgxFormValues>();
    @Output() protected ngxChange: EventEmitter<INgxFormValues> = new EventEmitter<INgxFormValues>();

    public formGroup: FormGroup = new FormGroup({});
    protected appearance: MatFormFieldAppearance = this.ngxAppearance;
    protected floatLabel: FloatLabelType = 'auto';
    protected rows: (string | { input: NgxFormInputs; flex: number }[])[] = [];
    protected inputValues: INgxFormValues = {};
    protected hiddenInputs: string[] = [];
    protected disabledButtons: string[] = [];

    protected isString = (value: any): boolean => typeof value === 'string';

    constructor(
        @Inject('NGX_FORM_APPEARANCE') public readonly ngxAppearance: MatFormFieldAppearance,
        private readonly ngxFormService: NgxFormService,
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

        // Default floatLabel
        this.floatLabel = this.ngxForm.floatLabel || 'auto';

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

                const inputs: NgxFormInputs[] = this.getInputs();
                const values: INgxFormValues = this.getValues();
                this.ngxFormService.checkAvailability(this.formGroup, inputs, values);
                this.hiddenInputs = this.ngxFormService.checkVisibility(this.formGroup, inputs, values);
                this.disabledButtons = this.ngxFormService.checkButtons(inputs, values);

                this.ngxChange.emit(values);
            },
        });

        const inputs: NgxFormInputs[] = this.getInputs();
        const values: INgxFormValues = this.getValues();
        this.ngxFormService.checkAvailability(this.formGroup, inputs, values);
        this.hiddenInputs = this.ngxFormService.checkVisibility(this.formGroup, inputs, values);
        this.disabledButtons = this.ngxFormService.checkButtons(inputs, values);
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
            input.type === 'GROUP' ||
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

    protected getValues = (): INgxFormValues =>
        this.ngxFormService.getValues(this.formGroup, this.getInputs(), this.hiddenInputs);

    protected checkValues = (): void =>
        this.ngxFormService.checkValues(this.formGroup, this.getInputs(), this.hiddenInputs, this.ngxSubmit);
}
