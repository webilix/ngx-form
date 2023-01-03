import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { NgxFormModule, NgxReportModule } from '@ngx-form';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ReportComponent } from './report/report.component';

@NgModule({
    declarations: [AppComponent, InputComponent, ReportComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,

        NgxFormModule.forRoot('outline'),
        NgxReportModule.forRoot(),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
