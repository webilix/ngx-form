import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NgxMaskService } from 'ngx-mask';

import { INgxFormValues } from './ngx-form.interface';
import { NgxFormInputs } from './ngx-form.type';
import { NgxFieldInputInfo } from './interfaces';

@Injectable()
export class NgxFormService {
    constructor(private readonly ngxMaskService: NgxMaskService) {}

    setInput(formGroup: FormGroup, input: NgxFormInputs): void {
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
        formGroup.setControl(name, NgxFieldInputInfo[input.type].methods.control(input, validators));
    }

    checkAvailability(formGroup: FormGroup, inputs: NgxFormInputs[], values: INgxFormValues): void {
        inputs.forEach((input: NgxFormInputs) => {
            if (input.type === 'COMMENT' || !input.disableOn) return;

            const disabled: boolean = input.disableOn(values);
            disabled ? formGroup.get(input.name)?.disable() : formGroup.get(input.name)?.enable();
        });
    }

    checkVisibility(formGroup: FormGroup, inputs: NgxFormInputs[], values: INgxFormValues): string[] {
        const hiddenInputs: string[] = [];
        inputs.forEach((input: NgxFormInputs) => {
            if (input.type === 'COMMENT' || !input.hideOn) return;

            const hidden: boolean = input.hideOn(values);
            hidden ? formGroup.get(input.name)?.disable() : formGroup.get(input.name)?.enable();
            if (hidden) hiddenInputs.push(input.name);
        });

        return hiddenInputs;
    }

    checkButtons(inputs: NgxFormInputs[], values: INgxFormValues): string[] {
        const disabledButtons: string[] = [];
        inputs.forEach((input: NgxFormInputs) => {
            if (input.type === 'COMMENT' || !input.button || !input.button.disableOn) return;

            const disabled: boolean = input.button.disableOn(values);
            if (disabled) disabledButtons.push(input.name);
        });

        return disabledButtons;
    }

    private getValue(formGroup: FormGroup, input: NgxFormInputs, hiddenInputs: string[]): any {
        if (input.type === 'COMMENT') return null;
        if (!formGroup || !formGroup.get(input.name)) return null;
        if (formGroup.get(input.name)?.disabled) return null;
        if (hiddenInputs.includes(input.name)) return null;

        const inputValue: any = formGroup.get(input.name)?.value;
        const returnValue: any = NgxFieldInputInfo[input.type].methods.value(inputValue, input);
        switch (input.type) {
            case 'MASK':
                return this.ngxMaskService.applyMask(returnValue, input.mask);

            default:
                return returnValue;
        }
    }

    getValues(formGroup: FormGroup, inputs: NgxFormInputs[], hiddenInputs: string[]): INgxFormValues {
        const values: INgxFormValues = {};

        inputs.forEach((input: NgxFormInputs) => {
            if (input.type === 'COMMENT') return;
            values[input.name] =
                formGroup.get(input.name)?.errors === null ? this.getValue(formGroup, input, hiddenInputs) : null;
        });

        // COMMENT input onChange
        inputs.forEach((input: NgxFormInputs) => {
            if (input.type === 'COMMENT' && input.onChange) input.value = input.onChange(values) || '';
        });

        return values;
    }

    checkValues(
        formGroup: FormGroup,
        inputs: NgxFormInputs[],
        hiddenInputs: string[],
        ngxSubmit: EventEmitter<INgxFormValues>,
    ): void {
        formGroup.markAllAsTouched();
        if (formGroup.invalid) return;

        const values: INgxFormValues = this.getValues(formGroup, inputs, hiddenInputs);
        ngxSubmit.emit(values);
    }
}
