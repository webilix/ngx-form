import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxFormModule } from '@ngx-form';

import { AppComponent } from './app.component';

import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { BankCardComponent } from './bank-card/bank-card.component';
import { DomainComponent } from './domain/domain.component';
import { EmailComponent } from './email/email.component';
import { IpComponent } from './ip/ip.component';
import { MobileComponent } from './mobile/mobile.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { NameComponent } from './name/name.component';
import { NumberComponent } from './number/number.component';
import { PasswordComponent } from './password/password.component';
import { TextComponent } from './text/text.component';
import { UsernameComponent } from './username/username.component';

@NgModule({
    declarations: [
        AppComponent,

        AutoCompleteComponent,
        BankCardComponent,
        DomainComponent,
        EmailComponent,
        IpComponent,
        MobileComponent,
        MultiSelectComponent,
        NameComponent,
        NumberComponent,
        PasswordComponent,
        TextComponent,
        UsernameComponent,
    ],
    imports: [BrowserModule, BrowserAnimationsModule, NgxFormModule.forRoot()],
    bootstrap: [AppComponent],
})
export class AppModule {}
