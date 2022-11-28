import { CommonModule, DecimalPipe } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

import { NgxErrorPipe } from './pipes/ngx-error.pipe';
import { NgxAutocompleteDirective } from './directives/ngx-autocomplete.directive';
import { NgxAutoheightDirective } from './directives/ngx-autoheight.directive';
import { NgxErrorDirective } from './directives/ngx-error.directive';
import { NgxPersianNumberDirective } from './directives/ngx-persian-number.directive';

import { INgxConfig } from './interfaces/ngx-config';
import { NgxFormComponent } from './ngx-form.component';
import { NgxInputComponent } from './ngx-input/ngx-input.component';

import { NgxInputAutoCompleteComponent } from './ngx-input/auto-complete/ngx-input-auto-complete.component';
import { NgxInputMultiSelectComponent } from './ngx-input/multi-select/ngx-input-multi-select.component';
import { NgxInputNumberComponent } from './ngx-input/number/ngx-input-number.component';
import { NgxInputTextComponent } from './ngx-input/text/ngx-input-text.component';

@NgModule({
    declarations: [
        NgxErrorPipe,
        NgxAutocompleteDirective,
        NgxAutoheightDirective,
        NgxErrorDirective,
        NgxPersianNumberDirective,

        NgxFormComponent,
        NgxInputComponent,

        NgxInputAutoCompleteComponent,
        NgxInputMultiSelectComponent,
        NgxInputNumberComponent,
        NgxInputTextComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(),

        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatSelectModule,
    ],
    providers: [DecimalPipe],
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
