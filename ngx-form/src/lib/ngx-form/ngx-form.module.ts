import { CommonModule, DecimalPipe } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NgxCoordinatesModule } from '../ngx-coordinates';
import { NgxDateModule } from '../ngx-date';
import { NgxDirectiveModule } from '../ngx-directive';
import { NgxPipeModule } from '../ngx-pipe';

import {
    NgxDescriptionComponent,
    NgxInputAutoCompleteComponent,
    NgxInputBankCardComponent,
    NgxInputCheckboxComponent,
    NgxInputColorComponent,
    NgxInputComponent,
    NgxInputCoordinatesComponent,
    NgxInputDateComponent,
    NgxInputFileComponent,
    NgxInputGroupComponent,
    NgxInputIconComponent,
    NgxInputListComponent,
    NgxInputMultiFileComponent,
    NgxInputMultiSelectComponent,
    NgxInputNameComponent,
    NgxInputNumberComponent,
    NgxInputOptionListComponent,
    NgxInputPasswordComponent,
    NgxInputPeriodComponent,
    NgxInputPlateComponent,
    NgxInputRangeComponent,
    NgxInputSelectComponent,
    NgxInputTagComponent,
    NgxInputTextareaComponent,
    NgxInputTextComponent,
    NgxInputTimeComponent,
    NgxListOptionInputComponent,
    NgxListOptionItemComponent,
} from './components';
import { INgxFormConfig, INgxFormStyle } from './interfaces';

import { NgxFormComponent } from './ngx-form.component';
import { NgxFormResponsiveComponent } from './responsive/ngx-form-responsive.component';
import { NgxFormService } from './ngx-form.service';

@NgModule({
    declarations: [
        NgxFormComponent,
        NgxFormResponsiveComponent,

        NgxDescriptionComponent,
        NgxListOptionInputComponent,
        NgxListOptionItemComponent,

        NgxInputComponent,
        NgxInputAutoCompleteComponent,
        NgxInputBankCardComponent,
        NgxInputCheckboxComponent,
        NgxInputColorComponent,
        NgxInputCoordinatesComponent,
        NgxInputDateComponent,
        NgxInputFileComponent,
        NgxInputGroupComponent,
        NgxInputIconComponent,
        NgxInputListComponent,
        NgxInputMultiFileComponent,
        NgxInputMultiSelectComponent,
        NgxInputNameComponent,
        NgxInputNumberComponent,
        NgxInputOptionListComponent,
        NgxInputPasswordComponent,
        NgxInputPeriodComponent,
        NgxInputPlateComponent,
        NgxInputRangeComponent,
        NgxInputSelectComponent,
        NgxInputTagComponent,
        NgxInputTextComponent,
        NgxInputTextareaComponent,
        NgxInputTimeComponent,
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
        MatChipsModule,
        MatMenuModule,
        MatSlideToggleModule,

        NgxCoordinatesModule,
        NgxDateModule,
        NgxDirectiveModule,
        NgxPipeModule,
    ],
    providers: [DecimalPipe, provideNgxMask({}), NgxFormService],
    exports: [NgxFormComponent, NgxFormResponsiveComponent],
})
export class NgxFormModule {
    static forRoot(): ModuleWithProviders<NgxFormModule>;
    static forRoot(config: Partial<INgxFormConfig>): ModuleWithProviders<NgxFormModule>;
    static forRoot(style: Partial<INgxFormStyle>): ModuleWithProviders<NgxFormModule>;
    static forRoot(config: Partial<INgxFormConfig>, style: Partial<INgxFormStyle>): ModuleWithProviders<NgxFormModule>;
    static forRoot(arg1?: any, arg2?: any): ModuleWithProviders<NgxFormModule> {
        const config: Partial<INgxFormConfig> = arg1 && 'appearance' in arg1 ? arg1 : {};

        const style: Partial<INgxFormStyle> =
            arg1 && !('appearance' in arg1) ? arg1 : arg2 && !('appearance' in arg2) ? arg2 : {};

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
            `--ngxFormLabelColor:${style.labelColor || 'rgba(0, 0, 0, 0.6)'};` +
            '' +
            `--ngxDateIconFont:${style.iconFont || 'Material Icons Outlined'};` +
            `--ngxDateIconSize:${style.iconSize || '16px'};` +
            `--ngxDatePrimaryColor:${style.primaryColor || 'rgb(29, 91, 116)'};` +
            `--ngxDateBorderColor:${style.borderColor || 'rgb(187, 206, 213)'};` +
            `--ngxDateBackgroundColor:${style.backgroundColor || 'rgb(232, 239, 241)'};` +
            '}';
        const html: HTMLStyleElement = document.createElement('style');
        html.innerHTML = root;
        document.getElementsByTagName('head')[0].appendChild(html);

        return {
            ngModule: NgxFormModule,
            providers: [
                { provide: 'NGX_FORM_APPEARANCE', useValue: config?.appearance || 'fill' },
                { provide: 'NGX_FORM_SUBMITTIMEOUT', useValue: config?.submitTimeout || null },
                { provide: 'NGX_FORM_MOBILEWIDTH', useValue: config?.mobileWidth || 600 },
                { provide: 'NGX_FORM_COLUMNGAP', useValue: config?.columnGap || '2rem' },
                { provide: 'NGX_FORM_PRIMARY_COLOR', useValue: style.primaryColor || 'rgb(29, 91, 116)' },
            ],
        };
    }
}
