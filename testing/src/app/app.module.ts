import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxFormModule } from '@ngx-form';

import { AppComponent } from './app.component';

import { EmailComponent } from './email/email.component';
import { MobileComponent } from './mobile/mobile.component';
import { TextComponent } from './text/text.component';
import { NumberComponent } from './number/number.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';

@NgModule({
    declarations: [AppComponent, EmailComponent, MobileComponent, TextComponent, NumberComponent, AutoCompleteComponent],
    imports: [BrowserModule, BrowserAnimationsModule, NgxFormModule.forRoot()],
    bootstrap: [AppComponent],
})
export class AppModule {}
