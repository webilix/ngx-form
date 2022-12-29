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
} from './directives';
import { INgxStyle } from './interfaces';
import { NgxBankCardPipe, NgxDatePipe, NgxErrorPipe, NgxFileSizePipe, NgxMobilePipe } from './pipes';

import { NgxFormService } from './ngx-form.service';
import { NgxFormComponent } from './ngx-form.component';

import { NgxDateComponent } from './components/ngx-date/ngx-date.component';
import { NgxListOptionInputComponent } from './components/ngx-list-option-input/ngx-list-option-input.component';
import { NgxListOptionItemComponent } from './components/ngx-list-option-item/ngx-list-option-item.component';

import { NgxInputComponent } from './ngx-input/ngx-input.component';
import { NgxInputAutoCompleteComponent } from './ngx-input/auto-complete/ngx-input-auto-complete.component';
import { NgxInputCheckboxComponent } from './ngx-input/checkbox/ngx-input-checkbox.component';
import { NgxInputColorComponent } from './ngx-input/color/ngx-input-color.component';
import { NgxInputDateComponent } from './ngx-input/date/ngx-input-date.component';
import { NgxInputFileComponent } from './ngx-input/file/ngx-input-file.component';
import { NgxInputListComponent } from './ngx-input/list/ngx-input-list.component';
import { NgxInputMultiFileComponent } from './ngx-input/multi-file/ngx-input-multi-file.component';
import { NgxInputMultiSelectComponent } from './ngx-input/multi-select/ngx-input-multi-select.component';
import { NgxInputNameComponent } from './ngx-input/name/ngx-input-name.component';
import { NgxInputNumberComponent } from './ngx-input/number/ngx-input-number.component';
import { NgxInputOptionListComponent } from './ngx-input/option-list/ngx-input-option-list.component';
import { NgxInputPasswordComponent } from './ngx-input/password/ngx-input-password.component';
import { NgxInputPeriodComponent } from './ngx-input/period/ngx-input-period.component';
import { NgxInputRangeComponent } from './ngx-input/range/ngx-input-range.component';
import { NgxInputSelectComponent } from './ngx-input/select/ngx-input-select.component';
import { NgxInputTagComponent } from './ngx-input/tag/ngx-input-tag.component';
import { NgxInputTextComponent } from './ngx-input/text/ngx-input-text.component';
import { NgxInputTextareaComponent } from './ngx-input/textarea/ngx-input-textarea.component';

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
    static forRoot(style: Partial<INgxStyle>): ModuleWithProviders<NgxFormModule>;
    static forRoot(appearance: MatFormFieldAppearance, style: Partial<INgxStyle>): ModuleWithProviders<NgxFormModule>;
    static forRoot(arg1?: any, arg2?: any): ModuleWithProviders<NgxFormModule> {
        const style: Partial<INgxStyle> =
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
