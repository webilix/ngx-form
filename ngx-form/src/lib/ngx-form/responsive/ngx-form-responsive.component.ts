import {
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';
import { FormGroup, NgForm } from '@angular/forms';

import { INgxFormValues, INgxResponsiveForm, INgxResponsiveFormSection } from '../ngx-form.interface';
import { NgxFormService } from '../ngx-form.service';
import { NgxFormInputs } from '../ngx-form.type';

interface ISection {
    title?: string;
    description?: string;
    columns: { inputs: NgxFormInputs[]; flex: number }[];
}

@Component({
    selector: 'ngx-form-responsive',
    templateUrl: './ngx-form-responsive.component.html',
    styleUrls: ['../ngx-form.scss', './ngx-form-responsive.component.scss'],
})
export class NgxFormResponsiveComponent implements OnInit, OnChanges {
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.setSize();
    }

    @ViewChild('formObject') ngForm?: NgForm;

    @Input({ required: true }) ngxForm!: INgxResponsiveForm;
    @Output() protected ngxSubmit: EventEmitter<INgxFormValues> = new EventEmitter<INgxFormValues>();
    @Output() protected ngxChange: EventEmitter<INgxFormValues> = new EventEmitter<INgxFormValues>();
    @Output() protected viewChange: EventEmitter<'DESKTOP' | 'MOBILE'> = new EventEmitter<'DESKTOP' | 'MOBILE'>();

    public formGroup: FormGroup = new FormGroup({});
    protected appearance: MatFormFieldAppearance = this.ngxAppearance;
    protected floatLabel: FloatLabelType = 'auto';
    protected sections: ISection[] = [];
    protected inputValues: INgxFormValues = {};
    protected hiddenInputs: string[] = [];
    protected disabledButtons: string[] = [];
    protected size: { width: number; height: number; isMobile: boolean } = { width: 0, height: 0, isMobile: false };

    constructor(
        @Inject('NGX_FORM_APPEARANCE') public readonly ngxAppearance: MatFormFieldAppearance,
        @Inject('NGX_FORM_MOBILEWIDTH') public readonly mobileWidth: number,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly ngxFormService: NgxFormService,
    ) {}

    ngOnInit(): void {
        this.formGroup = new FormGroup({});
        this.getInputs().forEach((input: NgxFormInputs) => this.ngxFormService.setInput(this.formGroup, input));

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

        this.setSize();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.sections = [];
        this.ngxForm.sections.forEach((section: INgxResponsiveFormSection) => {
            if (section.columns.length === 0) return;

            this.sections.push({ title: section.title, description: section.description, columns: [] });
            if ('inputs' in section.columns[0])
                section.columns.forEach((column) => {
                    if ('inputs' in column)
                        this.sections[this.sections.length - 1].columns.push({
                            inputs: column.inputs,
                            flex: column.flex || 1,
                        });
                });
            else
                this.sections[this.sections.length - 1].columns.push({
                    inputs: section.columns as NgxFormInputs[],
                    flex: 1,
                });
        });
    }

    private setSize(): void {
        const omitEmit: boolean = this.size.width === 0 && this.size.height === 0;
        const isMobile: boolean = this.size.isMobile;

        const mobileWidth: number = this.ngxForm.mobileWidth || this.mobileWidth || 600;
        this.size = {
            width: window.innerWidth,
            height: window.innerHeight,
            isMobile: window.innerWidth <= mobileWidth,
        };

        if (!omitEmit || isMobile !== this.size.isMobile) {
            this.viewChange.emit(this.size.isMobile ? 'MOBILE' : 'DESKTOP');
            this.changeDetectorRef.detectChanges();
        }
    }

    protected showSection(section: { title?: string; columns: { inputs: NgxFormInputs[]; flex: number }[] }): boolean {
        for (let c = 0; c < section.columns.length; c++) {
            for (let i = 0; i < section.columns[c].inputs.length; i++) {
                const input = section.columns[c].inputs[i];
                if ('name' in input && !this.hiddenInputs.includes(input.name)) return true;
            }
        }

        return false;
    }

    protected showColumn(inputs: NgxFormInputs[]): boolean {
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            if ('name' in input && !this.hiddenInputs.includes(input.name)) return true;
        }

        return false;
    }

    private getInputs(): NgxFormInputs[] {
        const inputs: NgxFormInputs[] = [];
        this.ngxForm.sections.forEach((section: INgxResponsiveFormSection) => {
            if (section.columns.length === 0) return;

            section.columns.forEach((column) => {
                if ('inputs' in column) inputs.push(...column.inputs);
                else inputs.push(column);
            });
        });

        return inputs;
    }

    protected getValues = (): INgxFormValues =>
        this.ngxFormService.getValues(this.formGroup, this.getInputs(), this.hiddenInputs);

    protected checkValues = (): void =>
        this.ngxFormService.checkValues(this.formGroup, this.getInputs(), this.hiddenInputs, this.ngxSubmit);
}
