import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxFormModule } from '@ngx-form';

import { AppComponent } from './app.component';

import { EmailComponent } from './email/email.component';
import { TextComponent } from './text/text.component';

@NgModule({
    declarations: [AppComponent, EmailComponent, TextComponent],
    imports: [BrowserModule, BrowserAnimationsModule, NgxFormModule.forRoot()],
    bootstrap: [AppComponent],
})
export class AppModule {}
