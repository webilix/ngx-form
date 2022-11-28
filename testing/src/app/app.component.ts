import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';

import { INgxForm, NgxFormComponent } from '@ngx-form';

import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { EmailComponent } from './email/email.component';
import { MobileComponent } from './mobile/mobile.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { NameComponent } from './name/name.component';
import { NumberComponent } from './number/number.component';
import { PasswordComponent } from './password/password.component';
import { TextComponent } from './text/text.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild('ngxFormComponent') ngxFormComponent?: NgxFormComponent;

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [
            {
                name: 'auto-complete',
                type: 'AUTO-COMPLETE',
                title: 'لیست تکمیلی',
                options: ['سیمیلیس', 'مپانگا', 'کت اتو', 'پلکو'],
                optional: true,
            },
            { name: 'email', type: 'EMAIL', optional: true },
            { name: 'mobile', type: 'MOBILE', optional: true },
            {
                name: 'multi-select',
                type: 'MULTI-SELECT',
                title: 'چند انتخابی',
                options: [
                    { id: '1ST', title: 'گزینه اول' },
                    { id: '2ND', title: 'گزینه دوم' },
                    { id: '3RD', title: 'گزینه سوم' },
                    { id: '4TH', title: 'گزینه چهارم' },
                ],
                view: 'SELECT',
            },
            { name: 'name', type: 'NAME', optional: true },
            { name: 'number', type: 'NUMBER', title: 'مقدار عددی', optional: true },
            { name: 'password', type: 'PASSWORD', optional: true },
            { name: 'text', type: 'TEXT', title: 'متن یک خطی', optional: true },
        ],
        buttons: [{ title: 'ریست کردن فرم', action: this.resetValues.bind(this) }],
    };

    public types: { type: string; title: string; component: ComponentType<any> }[] = [
        { type: 'AUTO-COMPLETE', title: 'لیست تکمیلی', component: AutoCompleteComponent },
        { type: 'EMAIL', title: 'ایمیل', component: EmailComponent },
        { type: 'MOBILE', title: 'موبایل', component: MobileComponent },
        { type: 'MULTI-SELECT', title: 'چند انتخابی', component: MultiSelectComponent },
        { type: 'NAME', title: 'نام و نام خانوادگی', component: NameComponent },
        { type: 'NUMBER', title: 'مقدار عددی', component: NumberComponent },
        { type: 'PASSWORD', title: 'کلمه عبور', component: PasswordComponent },
        { type: 'TEXT', title: 'متن یک خطی', component: TextComponent },
    ];

    public type: string | null = null;
    public title: string | null = null;
    public component?: ComponentType<any>;

    public localStorage: string = 'NGX-FORM-INPUT-TYPE';

    ngOnInit(): void {
        const type: string | null = localStorage.getItem(this.localStorage);
        this.setType(this.types.find((t) => t.type === type)?.type || '');
    }

    public showValues = console.log;

    private resetValues(): void {
        this.ngxFormComponent?.ngForm?.resetForm();
    }

    public setType(type: string): void {
        if (type === '') {
            localStorage.removeItem(this.localStorage);
            this.type = null;
            this.title = null;
            this.component = undefined;
        } else {
            const data = this.types.find((t) => t.type === type);
            if (!data) return;

            localStorage.setItem(this.localStorage, type);
            this.type = type;
            this.title = data.title;
            this.component = data.component;
        }
    }
}
