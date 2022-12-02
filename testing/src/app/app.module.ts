import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxFormModule } from '@ngx-form';

import { AppComponent } from './app.component';

import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { BankCardComponent } from './bank-card/bank-card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ColorComponent } from './color/color.component';
import { DateComponent } from './date/date.component';
import { DomainComponent } from './domain/domain.component';
import { EmailComponent } from './email/email.component';
import { FileComponent } from './file/file.component';
import { IpComponent } from './ip/ip.component';
import { ListComponent } from './list/list.component';
import { MobileComponent } from './mobile/mobile.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { NameComponent } from './name/name.component';
import { NationalCodeComponent } from './national-code/national-code.component';
import { NumberComponent } from './number/number.component';
import { NumericComponent } from './numeric/numeric.component';
import { OptionListComponent } from './option-list/option-list.component';
import { PasswordComponent } from './password/password.component';
import { PeriodComponent } from './period/period.component';
import { RangeComponent } from './range/range.component';
import { SelectComponent } from './select/select.component';
import { TagComponent } from './tag/tag.component';
import { TextComponent } from './text/text.component';
import { UrlComponent } from './url/url.component';
import { UsernameComponent } from './username/username.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
    declarations: [
        AppComponent,

        AutoCompleteComponent,
        BankCardComponent,
        CheckboxComponent,
        ColorComponent,
        DateComponent,
        DomainComponent,
        EmailComponent,
        FileComponent,
        IpComponent,
        ListComponent,
        MobileComponent,
        MultiSelectComponent,
        NameComponent,
        NationalCodeComponent,
        NumberComponent,
        NumericComponent,
        OptionListComponent,
        PasswordComponent,
        PeriodComponent,
        RangeComponent,
        SelectComponent,
        TextComponent,
        TagComponent,
        UrlComponent,
        UsernameComponent,
        TextareaComponent,
    ],
    imports: [BrowserModule, BrowserAnimationsModule, NgxFormModule.forRoot()],
    bootstrap: [AppComponent],
})
export class AppModule {}
