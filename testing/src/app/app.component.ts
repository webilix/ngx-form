import { Component, OnInit, ViewChild } from '@angular/core';

import { INgxForm, NgxFormComponent, NgxFormInputs } from '@ngx-form';

import {
    AutoCompleteInputs,
    BankCardInputs,
    CheckboxInputs,
    ColorInputs,
    DateInputs,
    DomainInputs,
    EmailInputs,
    FileInputs,
    IconInputs,
    IpInputs,
    ListInputs,
    MaskInputs,
    MobileInputs,
    MultiFileInputs,
    MultiSelectInputs,
    NameInputs,
    NationalCodeInputs,
    NumberInputs,
    NumericInputs,
    OptionListInputs,
    PasswordInputs,
    PeriodInputs,
    PlateInputs,
    PriceInputs,
    RangeInputs,
    SelectInputs,
    TagInputs,
    TextareaInputs,
    TextInputs,
    TimeInputs,
    UrlInputs,
    UsernameInputs,
} from './inputs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild('ngxFormComponent') ngxFormComponent?: NgxFormComponent;

    public column: number = 1;
    public ngxInputs: NgxFormInputs[] = [
        {
            type: 'COMMENT',
            title: 'توضیحات',
            value: 'متن توضیحات به این صورت نمایش داده می‌شود.',
            description:
                'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
                '\n' +
                'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
        },

        {
            name: 'auto-complete',
            type: 'AUTO-COMPLETE',
            title: 'لیست تکمیلی',
            options: ['سیمیلیس', 'مپانگا', 'کت اتو', 'پلکو'],
            optional: true,
            button: { icon: 'add', click: () => console.log('AUTO-COMPLETE EXTRA BUTTON') },
        },
        {
            name: 'bank-card',
            type: 'BANK-CARD',
            optional: true,
            button: { icon: 'add', click: () => console.log('BANK-CARD EXTRA BUTTON') },
        },
        {
            name: 'checkbox',
            type: 'CHECKBOX',
            message: 'یک انتخابی',
            button: { icon: 'add', click: () => console.log('CHECKBOX EXTRA BUTTON') },
        },
        {
            name: 'color',
            type: 'COLOR',
            optional: true,
            button: { icon: 'add', click: () => console.log('COLOR EXTRA BUTTON') },
        },
        {
            name: 'date',
            type: 'DATE',
            optional: true,
            button: { icon: 'add', click: () => console.log('DATE EXTRA BUTTON') },
        },
        {
            name: 'domain',
            type: 'DOMAIN',
            optional: true,
            button: { icon: 'add', click: () => console.log('DOMAIN EXTRA BUTTON') },
        },
        {
            name: 'email',
            type: 'EMAIL',
            optional: true,
            button: { icon: 'add', click: () => console.log('EMAIL EXTRA BUTTON') },
        },
        {
            name: 'file',
            type: 'FILE',
            optional: true,
            button: { icon: 'add', click: () => console.log('FILE EXTRA BUTTON') },
        },
        {
            name: 'icon',
            type: 'ICON',
            optional: true,
            icons: [
                'sports_soccer',
                'sports_basketball',
                'sports_baseball',
                'sports_volleyball',
                'sports_football',
                'sports_rugby',
                'sports_golf',
            ],
            button: { icon: 'add', click: () => console.log('ICON EXTRA BUTTON') },
        },
        {
            name: 'ip',
            type: 'IP',
            optional: true,
            button: { icon: 'add', click: () => console.log('IP EXTRA BUTTON') },
        },
        {
            name: 'list',
            type: 'LIST',
            title: 'لیست',
            button: { icon: 'add', click: () => console.log('LIST EXTRA BUTTON') },
        },
        {
            name: 'mask',
            type: 'MASK',
            title: 'فرمت عددی',
            mask: '00-000-0000',
            optional: true,
            button: { icon: 'add', click: () => console.log('MASK EXTRA BUTTON') },
        },
        {
            name: 'mobile',
            type: 'MOBILE',
            optional: true,
            button: { icon: 'add', click: () => console.log('MOBILE EXTRA BUTTON') },
        },
        {
            name: 'multi-file',
            type: 'MULTI-FILE',
            button: { icon: 'add', click: () => console.log('MULTI-FILE EXTRA BUTTON') },
        },
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
            button: { icon: 'add', click: () => console.log('MULTI-SELECT EXTRA BUTTON') },
        },
        {
            name: 'name',
            type: 'NAME',
            optional: true,
            button: { icon: 'add', click: () => console.log('NAME EXTRA BUTTON') },
        },
        {
            name: 'national-code',
            type: 'NATIONAL-CODE',
            optional: true,
            button: { icon: 'add', click: () => console.log('NATIONAL-CODE EXTRA BUTTON') },
        },
        {
            name: 'number',
            type: 'NUMBER',
            title: 'مقدار عددی',
            optional: true,
            button: { icon: 'add', click: () => console.log('NUMBER EXTRA BUTTON') },
        },
        {
            name: 'numeric',
            type: 'NUMERIC',
            title: 'عبارت عددی',
            optional: true,
            button: { icon: 'add', click: () => console.log('NUMERIC EXTRA BUTTON') },
        },
        {
            name: 'option-list',
            type: 'OPTION-LIST',
            title: 'لیست گزینه‌ها',
            button: { icon: 'add', click: () => console.log('OPTION-LIST EXTRA BUTTON') },
        },
        {
            name: 'password',
            type: 'PASSWORD',
            optional: true,
            button: { icon: 'add', click: () => console.log('PASSWORD EXTRA BUTTON') },
        },
        {
            name: 'period',
            type: 'PERIOD',
            optional: true,
            button: { icon: 'add', click: () => console.log('PERIOD EXTRA BUTTON') },
        },
        {
            name: 'plate',
            type: 'PLATE',
            optional: true,
            button: { icon: 'add', click: () => console.log('PLATE EXTRA BUTTON') },
        },
        {
            name: 'price',
            type: 'PRICE',
            title: 'قیمت',
            optional: true,
            button: { icon: 'add', click: () => console.log('PRICE EXTRA BUTTON') },
        },
        {
            name: 'range',
            type: 'RANGE',
            title: 'محدوده عددی',
            optional: true,
            button: { icon: 'add', click: () => console.log('RANGE EXTRA BUTTON') },
        },
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
            button: { icon: 'add', click: () => console.log('SELECT EXTRA BUTTON') },
        },
        {
            name: 'tag',
            type: 'TAG',
            tags: ['اول', 'دوم', 'سوم', 'چهارم', 'پنجم'],
            button: { icon: 'add', click: () => console.log('TAG EXTRA BUTTON') },
        },
        {
            name: 'text',
            type: 'TEXT',
            title: 'متن یک خطی',
            optional: true,
            button: { icon: 'add', click: () => console.log('TEXT EXTRA BUTTON') },
        },
        {
            name: 'textarea',
            type: 'TEXTAREA',
            title: 'متن چند خطی',
            optional: true,
            button: { icon: 'add', click: () => console.log('TEXTAREA EXTRA BUTTON') },
        },
        {
            name: 'time',
            type: 'TIME',
            optional: true,
            button: { icon: 'add', click: () => console.log('TIME EXTRA BUTTON') },
        },
        {
            name: 'url',
            type: 'URL',
            optional: true,
            button: { icon: 'add', click: () => console.log('URL EXTRA BUTTON') },
        },
        {
            name: 'username',
            type: 'USERNAME',
            optional: true,
            button: { icon: 'add', click: () => console.log('USERNAME EXTRA BUTTON') },
        },
    ];

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [],
        buttons: [{ title: 'ریست کردن فرم', action: this.resetValues.bind(this) }],
        appearance: 'fill',
    };

    public types: { type: string; title: string; inputs: (NgxFormInputs | NgxFormInputs[])[] }[] = [
        { type: 'AUTO-COMPLETE', title: 'لیست تکمیلی', inputs: AutoCompleteInputs },
        { type: 'BANK-CARD', title: 'شماره کارت بانکی', inputs: BankCardInputs },
        { type: 'CHECKBOX', title: 'یک انتخابی', inputs: CheckboxInputs },
        { type: 'COLOR', title: 'رنگ', inputs: ColorInputs },
        { type: 'DATE', title: 'تاریخ', inputs: DateInputs },
        { type: 'DOMAIN', title: 'نام دامنه', inputs: DomainInputs },
        { type: 'EMAIL', title: 'ایمیل', inputs: EmailInputs },
        { type: 'FILE', title: 'فایل', inputs: FileInputs },
        { type: 'ICON', title: 'آیکون', inputs: IconInputs },
        { type: 'IP', title: 'آدرس آی‌پی', inputs: IpInputs },
        { type: 'LIST', title: 'لیست', inputs: ListInputs },
        { type: 'MASK', title: 'فرمت عددی', inputs: MaskInputs },
        { type: 'MOBILE', title: 'موبایل', inputs: MobileInputs },
        { type: 'MULTI-FILE', title: 'فایل‌ها', inputs: MultiFileInputs },
        { type: 'MULTI-SELECT', title: 'چند انتخابی', inputs: MultiSelectInputs },
        { type: 'NAME', title: 'نام و نام خانوادگی', inputs: NameInputs },
        { type: 'NATIONAL-CODE', title: 'کد ملی', inputs: NationalCodeInputs },
        { type: 'NUMBER', title: 'مقدار عددی', inputs: NumberInputs },
        { type: 'NUMERIC', title: 'عبارت عددی', inputs: NumericInputs },
        { type: 'OPTION-LIST', title: 'لیست گزینه‌ها', inputs: OptionListInputs },
        { type: 'PASSWORD', title: 'کلمه عبور', inputs: PasswordInputs },
        { type: 'PERIOD', title: 'محدوده زمانی', inputs: PeriodInputs },
        { type: 'PLATE', title: 'شماره پلاک', inputs: PlateInputs },
        { type: 'PRICE', title: 'قیمت', inputs: PriceInputs },
        { type: 'RANGE', title: 'محدوده عددی', inputs: RangeInputs },
        { type: 'SELECT', title: 'لیست کشویی', inputs: SelectInputs },
        { type: 'TAG', title: 'تگ', inputs: TagInputs },
        { type: 'TEXT', title: 'متن یک خطی', inputs: TextInputs },
        { type: 'TEXTAREA', title: 'متن چند خطی', inputs: TextareaInputs },
        { type: 'TIME', title: 'ساعت', inputs: TimeInputs },
        { type: 'URL', title: 'آدرس سایت', inputs: UrlInputs },
        { type: 'USERNAME', title: 'نام کاربری', inputs: UsernameInputs },
    ];

    public type: string | null = null;
    public inputs: (NgxFormInputs | NgxFormInputs[])[] = [];

    public localStorage: string = 'NGX-FORM-INPUT-TYPE';

    ngOnInit(): void {
        const type: string | null = localStorage.getItem(this.localStorage);
        this.setType(type === 'REPORT' ? 'REPORT' : this.types.find((t) => t.type === type)?.type || '');

        this.setColumn(1);
    }

    public showValues = console.log;

    private resetValues(): void {
        this.ngxFormComponent?.ngForm?.resetForm();
    }

    setColumn(column: number): void {
        if (column === 1) {
            this.ngxForm.inputs = [...this.ngxInputs];
            return;
        }

        this.ngxForm.inputs = [];

        const inputs: NgxFormInputs[] = [...this.ngxInputs];
        while (inputs.length !== 0) {
            this.ngxForm.inputs.push(inputs.splice(0, column));
        }
    }

    public setType(type: string): void {
        if (type === '') {
            localStorage.removeItem(this.localStorage);
            this.type = null;
            this.inputs = [];
        } else {
            if (type !== 'REPORT') {
                const data = this.types.find((t) => t.type === type);
                if (!data) return;
                this.inputs = data.inputs;
            }

            localStorage.setItem(this.localStorage, type);
            this.type = type;
        }
    }
}
