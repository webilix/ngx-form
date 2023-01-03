import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideEnvironmentNgxMask } from 'ngx-mask';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { NgxDirectiveModule } from '../ngx-directive';
import { NgxDateModule } from '../ngx-date';
import { NgxPipeModule } from '../ngx-pipe';

import {
    NgxReportConditionComponent,
    NgxReportGroupComponent,
    NgxValueDataComponent,
    NgxValueDateComponent,
    NgxValueMobileComponent,
    NgxValueNumberComponent,
    NgxValueOptionComponent,
    NgxValueTextComponent,
} from './components';
import { INgxReportStyle } from './interfaces';

import { NgxReportComponent } from './ngx-report.component';
import { NgxReportService } from './ngx-report.service';

@NgModule({
    declarations: [
        NgxReportComponent,
        NgxReportGroupComponent,
        NgxReportConditionComponent,

        NgxValueDataComponent,
        NgxValueDateComponent,
        NgxValueMobileComponent,
        NgxValueNumberComponent,
        NgxValueOptionComponent,
        NgxValueTextComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgxMaskDirective,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,

        NgxDirectiveModule,
        NgxDateModule,
        NgxPipeModule,
    ],
    providers: [provideEnvironmentNgxMask(), NgxReportService],
    exports: [NgxReportComponent],
})
export class NgxReportModule {
    static forRoot(): ModuleWithProviders<NgxReportModule>;
    static forRoot(style: Partial<INgxReportStyle>): ModuleWithProviders<NgxReportModule>;
    static forRoot(style?: Partial<INgxReportStyle>): ModuleWithProviders<NgxReportModule> {
        const root: string =
            ':root {' +
            `--ngxReportFaFont:${style?.faFont || 'Yekan'};` +
            `--ngxReportEnFont:${style?.enFont || "Roboto, 'Helvetica Neue', sans-serif"};` +
            `--ngxReportFontSize:${style?.faSize || '12px'};` +
            `--ngxReportIconFont:${style?.iconFont || 'Material Icons Outlined'};` +
            `--ngxReportIconSize:${style?.iconSize || '16px'};` +
            `--ngxReportPrimaryColor:${style?.primaryColor || 'rgb(29, 91, 116)'};` +
            `--ngxReportWarnColor:${style?.warnColor || 'rgb(255, 49, 27)'};` +
            `--ngxReportBorderColor:${style?.borderColor || 'rgb(187, 206, 213)'};` +
            `--ngxReportBackgroundColor:${style?.backgroundColor || 'rgb(232, 239, 241)'};` +
            '' +
            `--ngxDateIconFont:${style?.iconFont || 'Material Icons Outlined'};` +
            `--ngxDateIconSize:${style?.iconSize || '16px'};` +
            `--ngxDatePrimaryColor:${style?.primaryColor || 'rgb(29, 91, 116)'};` +
            `--ngxDateBorderColor:${style?.borderColor || 'rgb(187, 206, 213)'};` +
            `--ngxDateBackgroundColor:${style?.backgroundColor || 'rgb(232, 239, 241)'};` +
            '}';

        const html: HTMLStyleElement = document.createElement('style');
        html.innerHTML = root;
        document.getElementsByTagName('head')[0].appendChild(html);

        return { ngModule: NgxReportModule };
    }
}
