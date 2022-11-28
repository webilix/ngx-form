import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxFormModule } from '@ngx-form';

import { AppComponent } from './app.component';

import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { EmailComponent } from './email/email.component';
import { MobileComponent } from './mobile/mobile.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { NameComponent } from './name/name.component';
import { NumberComponent } from './number/number.component';
import { TextComponent } from './text/text.component';

@NgModule({
    declarations: [
        AppComponent,

        AutoCompleteComponent,
        EmailComponent,
        MobileComponent,
        MultiSelectComponent,
        NameComponent,
        NumberComponent,
        TextComponent,
    ],
    imports: [BrowserModule, BrowserAnimationsModule, NgxFormModule.forRoot()],
    bootstrap: [AppComponent],
})
export class AppModule {}
