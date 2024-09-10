import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { NgxFormModule, NgxReportModule } from '@ngx-form';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';

import { PageIndexComponent } from './pages/index/page-index.component';
import { PageReportComponent } from './pages/report/page-report.component';
import { PageResponsiveComponent } from './pages/responsive/page-responsive.component';

import { AppRoutingModule } from './app.routing';

@NgModule({
    declarations: [AppComponent, InputComponent, PageIndexComponent, PageReportComponent, PageResponsiveComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,

        NgxFormModule.forRoot({ appearance: 'fill', submitTimeout: 1.5 }),
        NgxReportModule.forRoot(),

        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
