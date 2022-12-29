import { CommonModule, DecimalPipe } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxMaskDirective, provideEnvironmentNgxMask } from 'ngx-mask';

import { MatFormFieldAppearance, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';

import {
    NgxAutocompleteDirective,
    NgxAutoheightDirective,
    NgxErrorDirective,
    NgxPersianNumberDirective,
} from '../directives';
import { NgxBankCardPipe, NgxDatePipe, NgxErrorPipe, NgxFileSizePipe, NgxMobilePipe } from '../pipes';

import {
    NgxDateComponent,
    NgxInputAutoCompleteComponent,
    NgxInputCheckboxComponent,
    NgxInputColorComponent,
    NgxInputComponent,
    NgxInputDateComponent,
    NgxInputFileComponent,
    NgxInputListComponent,
    NgxInputMultiFileComponent,
    NgxInputMultiSelectComponent,
    NgxInputNameComponent,
    NgxInputNumberComponent,
    NgxInputOptionListComponent,
    NgxInputPasswordComponent,
    NgxInputPeriodComponent,
    NgxInputRangeComponent,
    NgxInputSelectComponent,
    NgxInputTagComponent,
    NgxInputTextareaComponent,
    NgxInputTextComponent,
    NgxListOptionInputComponent,
    NgxListOptionItemComponent,
} from './components';
import { INgxFormStyle } from './interfaces';

import { NgxFormService } from './ngx-form.service';
import { NgxFormComponent } from './ngx-form.component';

@NgModule({
    declarations: [
        NgxAutocompleteDirective,
        NgxAutoheightDirective,
        NgxErrorDirective,
        NgxPersianNumberDirective,
        NgxBankCardPipe,
        NgxDatePipe,
        NgxErrorPipe,
        NgxFileSizePipe,
        NgxMobilePipe,

        NgxFormComponent,

        NgxDateComponent,
        NgxListOptionInputComponent,
        NgxListOptionItemComponent,

        NgxInputComponent,
        NgxInputAutoCompleteComponent,
        NgxInputCheckboxComponent,
        NgxInputColorComponent,
        NgxInputDateComponent,
        NgxInputFileComponent,
        NgxInputListComponent,
        NgxInputMultiFileComponent,
        NgxInputMultiSelectComponent,
        NgxInputNameComponent,
        NgxInputNumberComponent,
        NgxInputOptionListComponent,
        NgxInputPasswordComponent,
        NgxInputPeriodComponent,
        NgxInputRangeComponent,
        NgxInputSelectComponent,
        NgxInputTagComponent,
        NgxInputTextComponent,
        NgxInputTextareaComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DragDropModule,
        NgxMaskDirective,

        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDialogModule,
        MatChipsModule,
    ],
    providers: [DecimalPipe, NgxFormService, provideEnvironmentNgxMask()],
    exports: [NgxFormComponent],
})
export class NgxFormModule {
    static forRoot(): ModuleWithProviders<NgxFormModule>;
    static forRoot(appearance: MatFormFieldAppearance): ModuleWithProviders<NgxFormModule>;
    static forRoot(style: Partial<INgxFormStyle>): ModuleWithProviders<NgxFormModule>;
    static forRoot(
        appearance: MatFormFieldAppearance,
        style: Partial<INgxFormStyle>,
    ): ModuleWithProviders<NgxFormModule>;
    static forRoot(arg1?: any, arg2?: any): ModuleWithProviders<NgxFormModule> {
        const style: Partial<INgxFormStyle> =
            arg1 && typeof arg1 !== 'string' ? arg1 : arg2 && typeof arg2 !== 'string' ? arg2 : {};

        const root: string =
            ':root {' +
            `--ngxFormFaFont:${style.faFont || 'Yekan'};` +
            `--ngxFormEnFont:${style.enFont || "Roboto, 'Helvetica Neue', sans-serif"};` +
            `--ngxFormIconFont:${style.iconFont || 'Material Icons Outlined'};` +
            `--ngxFormIconSize:${style.iconSize || '16px'};` +
            `--ngxFormPrimaryColor:${style.primaryColor || 'rgb(29, 91, 116)'};` +
            `--ngxFormWarnColor:${style.warnColor || 'rgb(255, 49, 27)'};` +
            `--ngxFormBorderColor:${style.borderColor || 'rgb(187, 206, 213)'};` +
            `--ngxFormBackgroundColor:${style.backgroundColor || 'rgb(232, 239, 241)'};` +
            '}';

        const html: HTMLStyleElement = document.createElement('style');
        html.innerHTML = root;
        document.getElementsByTagName('head')[0].appendChild(html);

        const appearance: MatFormFieldAppearance = arg1 === 'fill' || arg1 === 'outline' ? arg1 : 'fill';
        return {
            ngModule: NgxFormModule,
            providers: [{ provide: 'NGX_FORM_APPEARANCE', useValue: appearance }],
        };
    }
}
