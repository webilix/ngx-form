import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';

import { INgxForm, NgxFormComponent, NgxFormInputTypes } from '@ngx-form';

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
import { MultiFileComponent } from './multi-file/multi-file.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { NameComponent } from './name/name.component';
import { NationalCodeComponent } from './national-code/national-code.component';
import { NumberComponent } from './number/number.component';
import { NumericComponent } from './numeric/numeric.component';
import { OptionListComponent } from './option-list/option-list.component';
import { PasswordComponent } from './password/password.component';
import { PeriodComponent } from './period/period.component';
import { PriceComponent } from './price/price.component';
import { RangeComponent } from './range/range.component';
import { SelectComponent } from './select/select.component';
import { TagComponent } from './tag/tag.component';
import { TextComponent } from './text/text.component';
import { TextareaComponent } from './textarea/textarea.component';
import { UrlComponent } from './url/url.component';
import { UsernameComponent } from './username/username.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild('ngxFormComponent') ngxFormComponent?: NgxFormComponent;

    public column: number = 1;
    public inputs: NgxFormInputTypes[] = [
        { name: 'comment', type: 'COMMENT', title: 'توضیحات', value: 'متن توضیحات به این صورت نمایش داده می‌شود.' },

        {
            name: 'auto-complete',
            type: 'AUTO-COMPLETE',
            title: 'لیست تکمیلی',
            options: ['سیمیلیس', 'مپانگا', 'کت اتو', 'پلکو'],
            optional: true,
        },
        { name: 'bank-card', type: 'BANK-CARD', optional: true },
        { name: 'checkbox', type: 'CHECKBOX', message: 'یک انتخابی' },
        { name: 'color', type: 'COLOR', optional: true },
        { name: 'date', type: 'DATE', optional: true },
        { name: 'domain', type: 'DOMAIN', optional: true },
        { name: 'email', type: 'EMAIL', optional: true },
        { name: 'file', type: 'FILE', optional: true },
        { name: 'ip', type: 'IP', optional: true },
        { name: 'list', type: 'LIST', title: 'لیست' },
        { name: 'mobile', type: 'MOBILE', optional: true },
        { name: 'multi-file', type: 'MULTI-FILE' },
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
        { name: 'national-code', type: 'NATIONAL-CODE', optional: true },
        { name: 'number', type: 'NUMBER', title: 'مقدار عددی', optional: true },
        { name: 'numeric', type: 'NUMERIC', title: 'عبارت عددی', optional: true },
        { name: 'option-list', type: 'OPTION-LIST', title: 'لیست گزینه‌ها' },
        { name: 'password', type: 'PASSWORD', optional: true },
        { name: 'period', type: 'PERIOD', optional: true },
        { name: 'price', type: 'PRICE', title: 'قیمت', optional: true },
        { name: 'range', type: 'RANGE', title: 'محدوده عددی', optional: true },
        {
            name: 'select',
            type: 'SELECT',
            title: 'لیست کشویی',
            options: [
                { id: '1ST', title: 'گزینه اول' },
                { id: '2ND', title: 'گزینه دوم' },
                { id: '3RD', title: 'گزینه سوم' },
                { id: '4TH', title: 'گزینه چهارم' },
            ],
            optional: true,
        },
        { name: 'tag', type: 'TAG', tags: ['اول', 'دوم', 'سوم', 'چهارم', 'پنجم'] },
        { name: 'text', type: 'TEXT', title: 'متن یک خطی', optional: true },
        { name: 'textarea', type: 'TEXTAREA', title: 'متن چند خطی', optional: true },
        { name: 'url', type: 'URL', optional: true },
        { name: 'username', type: 'USERNAME', optional: true },
    ];

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [],
        buttons: [{ title: 'ریست کردن فرم', action: this.resetValues.bind(this) }],
        appearance: 'fill',
    };

    public types: { type: string; title: string; component: ComponentType<any> }[] = [
        { type: 'AUTO-COMPLETE', title: 'لیست تکمیلی', component: AutoCompleteComponent },
        { type: 'BANK-CARD', title: 'شماره کارت بانکی', component: BankCardComponent },
        { type: 'CHECKBOX', title: 'یک انتخابی', component: CheckboxComponent },
        { type: 'COLOR', title: 'رنگ', component: ColorComponent },
        { type: 'DATE', title: 'تاریخ', component: DateComponent },
        { type: 'DOMAIN', title: 'نام دامنه', component: DomainComponent },
        { type: 'EMAIL', title: 'ایمیل', component: EmailComponent },
        { type: 'FILE', title: 'فایل', component: FileComponent },
        { type: 'IP', title: 'آدرس آی‌پی', component: IpComponent },
        { type: 'LIST', title: 'لیست', component: ListComponent },
        { type: 'MOBILE', title: 'موبایل', component: MobileComponent },
        { type: 'MULTI-FILE', title: 'فایل‌ها', component: MultiFileComponent },
        { type: 'MULTI-SELECT', title: 'چند انتخابی', component: MultiSelectComponent },
        { type: 'NAME', title: 'نام و نام خانوادگی', component: NameComponent },
        { type: 'NATIONAL-CODE', title: 'کد ملی', component: NationalCodeComponent },
        { type: 'NUMBER', title: 'مقدار عددی', component: NumberComponent },
        { type: 'NUMERIC', title: 'عبارت عددی', component: NumericComponent },
        { type: 'OPTION-LIST', title: 'لیست گزینه‌ها', component: OptionListComponent },
        { type: 'PASSWORD', title: 'کلمه عبور', component: PasswordComponent },
        { type: 'PERIOD', title: 'محدوده زمانی', component: PeriodComponent },
        { type: 'PRICE', title: 'قیمت', component: PriceComponent },
        { type: 'RANGE', title: 'محدوده عددی', component: RangeComponent },
        { type: 'SELECT', title: 'لیست کشویی', component: SelectComponent },
        { type: 'TAG', title: 'تگ', component: TagComponent },
        { type: 'TEXT', title: 'متن یک خطی', component: TextComponent },
        { type: 'TEXTAREA', title: 'متن چند خطی', component: TextareaComponent },
        { type: 'URL', title: 'آدرس سایت', component: UrlComponent },
        { type: 'USERNAME', title: 'نام کاربری', component: UsernameComponent },
    ];

    public type: string | null = null;
    public title: string | null = null;
    public component?: ComponentType<any>;

    public localStorage: string = 'NGX-FORM-INPUT-TYPE';

    ngOnInit(): void {
        const type: string | null = localStorage.getItem(this.localStorage);
        this.setType(this.types.find((t) => t.type === type)?.type || '');

        this.setColumn(1);
    }

    public showValues = console.log;

    private resetValues(): void {
        this.ngxFormComponent?.ngForm?.resetForm();
    }

    setColumn(column: number): void {
        if (column === 1) {
            this.ngxForm.inputs = [...this.inputs];
            return;
        }

        this.ngxForm.inputs = [];

        const inputs: NgxFormInputTypes[] = [...this.inputs];
        while (inputs.length !== 0) {
            this.ngxForm.inputs.push(inputs.splice(0, column));
        }
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
