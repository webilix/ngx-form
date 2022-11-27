import { CommonModule, DecimalPipe } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { NgxErrorPipe } from './pipes/ngx-error.pipe';
import { NgxAutocompleteDirective } from './directives/ngx-autocomplete.directive';
import { NgxAutoheightDirective } from './directives/ngx-autoheight.directive';
import { NgxErrorDirective } from './directives/ngx-error.directive';
import { NgxPersianNumberDirective } from './directives/ngx-persian-number.directive';

import { INgxConfig } from './interfaces/ngx-config';
import { NgxFormComponent } from './ngx-form.component';
import { NgxInputComponent } from './ngx-input/ngx-input.component';

import { NgxInputTextComponent } from './ngx-input/text/ngx-input-text.component';
import { NgxInputNumberComponent } from './ngx-input/number/ngx-input-number.component';

@NgModule({
    declarations: [
        NgxErrorPipe,
        NgxAutocompleteDirective,
        NgxAutoheightDirective,
        NgxErrorDirective,
        NgxPersianNumberDirective,

        NgxFormComponent,
        NgxInputComponent,
        NgxInputTextComponent,
        NgxInputNumberComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(),

        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
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
        config.iconColor = config.iconColor || 'rgb(29, 91, 116)';

        return {
            ngModule: NgxFormModule,
            providers: [
                { provide: 'NGX_APPEARANCE', useValue: appearance },
                { provide: 'NGX_CONFIG', useValue: config },
            ],
        };
    }
}
