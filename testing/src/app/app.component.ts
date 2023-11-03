import { Component, OnInit, ViewChild } from '@angular/core';

import { INgxForm, INgxFormValues, NgxFormComponent, NgxFormInputs, NgxFormRow } from '@ngx-form';

import {
    AutoCompleteInputs,
    BankCardInputs,
    CheckboxInputs,
    ColorInputs,
    CoordinatesInputs,
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

    public button: boolean = false;
    public column: '1' | '2' | '3' | 'FLEX' = '2';
    public ngxInputs: NgxFormInputs[] = [
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
        { name: 'coordinates', type: 'COORDINATES', optional: true },
        { name: 'date', type: 'DATE', optional: true },
        { name: 'domain', type: 'DOMAIN', optional: true },
        { name: 'email', type: 'EMAIL', optional: true },
        { name: 'file', type: 'FILE', optional: true },
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
        },
        { name: 'ip', type: 'IP', optional: true },
        { name: 'list', type: 'LIST', title: 'لیست' },
        { name: 'mask', type: 'MASK', title: 'فرمت عددی', mask: '00-000-0000', optional: true },
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
        { name: 'plate', type: 'PLATE', optional: true },
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
        { name: 'time', type: 'TIME', optional: true },
        { name: 'url', type: 'URL', optional: true },
        { name: 'username', type: 'USERNAME', optional: true },
    ];

    public ngxForm: INgxForm = {
        submit: 'نمایش مقادیر ثبت شده در فرم',
        inputs: [],
        buttons: [{ title: 'ریست کردن فرم', action: this.resetValues.bind(this) }],
        appearance: 'fill',
    };

    public types: { type: string; title: string; rows: NgxFormRow[] }[] = [
        { type: 'AUTO-COMPLETE', title: 'لیست تکمیلی', rows: AutoCompleteInputs },
        { type: 'BANK-CARD', title: 'شماره کارت بانکی', rows: BankCardInputs },
        { type: 'CHECKBOX', title: 'یک انتخابی', rows: CheckboxInputs },
        { type: 'COLOR', title: 'رنگ', rows: ColorInputs },
        { type: 'COORDINATES', title: 'موقعیت جغرافیایی', rows: CoordinatesInputs },
        { type: 'DATE', title: 'تاریخ', rows: DateInputs },
        { type: 'DOMAIN', title: 'نام دامنه', rows: DomainInputs },
        { type: 'EMAIL', title: 'ایمیل', rows: EmailInputs },
        { type: 'FILE', title: 'فایل', rows: FileInputs },
        { type: 'ICON', title: 'آیکون', rows: IconInputs },
        { type: 'IP', title: 'آدرس آی‌پی', rows: IpInputs },
        { type: 'LIST', title: 'لیست', rows: ListInputs },
        { type: 'MASK', title: 'فرمت عددی', rows: MaskInputs },
        { type: 'MOBILE', title: 'موبایل', rows: MobileInputs },
        { type: 'MULTI-FILE', title: 'فایل‌ها', rows: MultiFileInputs },
        { type: 'MULTI-SELECT', title: 'چند انتخابی', rows: MultiSelectInputs },
        { type: 'NAME', title: 'نام و نام خانوادگی', rows: NameInputs },
        { type: 'NATIONAL-CODE', title: 'کد ملی', rows: NationalCodeInputs },
        { type: 'NUMBER', title: 'مقدار عددی', rows: NumberInputs },
        { type: 'NUMERIC', title: 'عبارت عددی', rows: NumericInputs },
        { type: 'OPTION-LIST', title: 'لیست گزینه‌ها', rows: OptionListInputs },
        { type: 'PASSWORD', title: 'کلمه عبور', rows: PasswordInputs },
        { type: 'PERIOD', title: 'محدوده زمانی', rows: PeriodInputs },
        { type: 'PLATE', title: 'شماره پلاک', rows: PlateInputs },
        { type: 'PRICE', title: 'قیمت', rows: PriceInputs },
        { type: 'RANGE', title: 'محدوده عددی', rows: RangeInputs },
        { type: 'SELECT', title: 'لیست کشویی', rows: SelectInputs },
        { type: 'TAG', title: 'تگ', rows: TagInputs },
        { type: 'TEXT', title: 'متن یک خطی', rows: TextInputs },
        { type: 'TEXTAREA', title: 'متن چند خطی', rows: TextareaInputs },
        { type: 'TIME', title: 'ساعت', rows: TimeInputs },
        { type: 'URL', title: 'آدرس سایت', rows: UrlInputs },
        { type: 'USERNAME', title: 'نام کاربری', rows: UsernameInputs },
    ];

    public type: string | null = null;
    public rows: NgxFormRow[] = [];

    public localStorage: string = 'NGX-FORM-INPUT-TYPE';

    ngOnInit(): void {
        const type: string | null = localStorage.getItem(this.localStorage);
        this.setType(type === 'REPORT' ? 'REPORT' : this.types.find((t) => t.type === type)?.type || '');

        this.setColumn(this.column);
    }

    public showValues = console.log;

    private resetValues(values: INgxFormValues): void {
        this.showValues('REST VALUES', values);
        this.ngxFormComponent?.ngForm?.resetForm();
    }

    setColumn(column: string): void {
        if (column === '1' || column === '2' || column === '3' || column === 'FLEX') this.column = column;

        const comment: NgxFormInputs = {
            type: 'COMMENT',
            title: 'توضیحات',
            value: 'متن توضیحات به این صورت نمایش داده می‌شود.',
            description:
                'بررسی شیوه نمایش توضیحات در گزینه‌های فرم' +
                '\n' +
                'امکان استفاده از دستورات HTML در توضیحات گزینه‌های فرم وجود ندارد اما توضیحات می‌تواند به صورت چند خطی مشخص شده باشد.',
        };

        const inputs: NgxFormInputs[] = [...this.ngxInputs];
        inputs.forEach((input: NgxFormInputs) => {
            if (input.type === 'COMMENT') return;
            input.button = this.button
                ? { icon: 'dashboard', click: () => console.log(`${input.type} BUTTON`) }
                : undefined;
        });

        if (this.column === '1') this.ngxForm.inputs = [comment, ...inputs];
        else {
            this.ngxForm.inputs = [comment];
            while (inputs.length !== 0) {
                const row = inputs.splice(0, this.column === 'FLEX' ? 2 : +this.column);
                if (this.column !== 'FLEX') this.ngxForm.inputs.push(row);
                else {
                    const flexRow = row.map((input) => ({ input, flex: Math.ceil(Math.random() * 2) }));
                    this.ngxForm.inputs.push(flexRow);
                }
            }
        }

        this.ngxForm = { ...this.ngxForm };
    }

    setButton(): void {
        this.button = !this.button;
        this.setColumn(this.column);
    }

    public setType(type: string): void {
        if (type === '') {
            localStorage.removeItem(this.localStorage);
            this.type = null;
            this.rows = [];
        } else {
            if (type !== 'REPORT') {
                const data = this.types.find((t) => t.type === type);
                if (!data) return;
                this.rows = data.rows;
            }

            localStorage.setItem(this.localStorage, type);
            this.type = type;
        }
    }
}
