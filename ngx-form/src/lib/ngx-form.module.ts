import { CommonModule, DecimalPipe } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxMaskModule } from 'ngx-mask';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';

import { NgxBankCardPipe } from './pipes/ngx-bank-card.pipe';
import { NgxDatePipe } from './pipes/ngx-date.pipe';
import { NgxErrorPipe } from './pipes/ngx-error.pipe';
import { NgxFileSizePipe } from './pipes/ngx-file-size.pipe';
import { NgxMobilePipe } from './pipes/ngx-mobile.pipe';
import { NgxAutocompleteDirective } from './directives/ngx-autocomplete.directive';
import { NgxAutoheightDirective } from './directives/ngx-autoheight.directive';
import { NgxErrorDirective } from './directives/ngx-error.directive';
import { NgxPersianNumberDirective } from './directives/ngx-persian-number.directive';

import { INgxConfig } from './interfaces/ngx-config';
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
        NgxBankCardPipe,
        NgxDatePipe,
        NgxErrorPipe,
        NgxFileSizePipe,
        NgxMobilePipe,
        NgxAutocompleteDirective,
        NgxAutoheightDirective,
        NgxErrorDirective,
        NgxPersianNumberDirective,

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
        NgxMaskModule.forRoot(),

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
    providers: [DecimalPipe, NgxFormService],
    exports: [NgxFormComponent],
})
export class NgxFormModule {
    static forRoot(): ModuleWithProviders<NgxFormModule>;
    static forRoot(appearance: 'fill' | 'outline'): ModuleWithProviders<NgxFormModule>;
    static forRoot(config: Partial<INgxConfig>): ModuleWithProviders<NgxFormModule>;
    static forRoot(appearance: 'fill' | 'outline', config: Partial<INgxConfig>): ModuleWithProviders<NgxFormModule>;
    static forRoot(arg1?: any, arg2?: any): ModuleWithProviders<NgxFormModule> {
        const appearance: 'fill' | 'outline' = arg1 === 'fill' || arg1 === 'outline' ? arg1 : 'fill';

        const config: Partial<INgxConfig> =
            arg1 && typeof arg1 !== 'string' ? arg1 : arg2 && typeof arg2 !== 'string' ? arg2 : {};
        config.faFont = config.faFont || 'Yekan';
        config.enFont = config.enFont || "Roboto, 'Helvetica Neue', sans-serif";
        config.iconFont = config.iconFont || 'Material Icons Outlined';
        config.iconSize = config.iconSize || '16px';
        config.primaryColor = config.primaryColor || 'rgb(29, 91, 116)';
        config.warnColor = config.warnColor || 'rgb(255, 49, 27)';
        config.borderColor = config.borderColor || 'rgb(187, 206, 213)';
        config.backgroundColor = config.backgroundColor || 'rgb(212, 219, 221)';

        return {
            ngModule: NgxFormModule,
            providers: [
                { provide: 'NGX_APPEARANCE', useValue: appearance },
                { provide: 'NGX_CONFIG', useValue: config },
            ],
        };
    }
}
