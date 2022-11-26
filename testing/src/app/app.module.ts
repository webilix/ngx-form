import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxFormModule } from 'ngx-form';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgxFormModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
