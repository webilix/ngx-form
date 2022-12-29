import { NgxFormMethods } from '../classes';
import { NgxFormInputTypes } from '../ngx-form.types';
import {
    NgxFormInputAutoCompleteMethods,
    NgxFormInputBankCardMethods,
    NgxFormInputCheckboxMethods,
    NgxFormInputColorMethods,
    NgxFormInputCommentMethods,
    NgxFormInputDateMethods,
    NgxFormInputDomainMethods,
    NgxFormInputEmailMethods,
    NgxFormInputFileMethods,
    NgxFormInputIpMethods,
    NgxFormInputListMethods,
    NgxFormInputMobileMethods,
    NgxFormInputMultiFileMethods,
    NgxFormInputMultiSelectMethods,
    NgxFormInputNameMethods,
    NgxFormInputNationalCodeMethods,
    NgxFormInputNumberMethods,
    NgxFormInputNumericMethods,
    NgxFormInputOptionListMethods,
    NgxFormInputPasswordMethods,
    NgxFormInputPeriodMethods,
    NgxFormInputPriceMethods,
    NgxFormInputRangeMethods,
    NgxFormInputSelectMethods,
    NgxFormInputTagMethods,
    NgxFormInputTextareaMethods,
    NgxFormInputTextMethods,
    NgxFormInputUrlMethods,
    NgxFormInputUsernameMethods,
} from '../inputs';

interface INgxFieldInputInfo {
    title: string;
    methods: NgxFormMethods<any, any>;
}

export const NgxFieldInputInfo: { [key in NgxFormInputTypes['type']]: INgxFieldInputInfo } = {
    // VIEWS
    COMMENT: { title: 'توضیحات', methods: new NgxFormInputCommentMethods() },
    // INPUTS
    'AUTO-COMPLETE': { title: 'لیست تکمیلی', methods: new NgxFormInputAutoCompleteMethods() },
    'BANK-CARD': { title: 'شماره کارت بانکی', methods: new NgxFormInputBankCardMethods() },
    CHECKBOX: { title: 'یک انتخابی', methods: new NgxFormInputCheckboxMethods() },
    COLOR: { title: 'رنگ', methods: new NgxFormInputColorMethods() },
    DATE: { title: 'تاریخ', methods: new NgxFormInputDateMethods() },
    DOMAIN: { title: 'دامنه سایت', methods: new NgxFormInputDomainMethods() },
    EMAIL: { title: 'ایمیل', methods: new NgxFormInputEmailMethods() },
    FILE: { title: 'فایل', methods: new NgxFormInputFileMethods() },
    IP: { title: 'آدرس آی‌پی', methods: new NgxFormInputIpMethods() },
    LIST: { title: 'لیست مقادیر', methods: new NgxFormInputListMethods() },
    MOBILE: { title: 'موبایل', methods: new NgxFormInputMobileMethods() },
    'MULTI-FILE': { title: 'فایل‌ها', methods: new NgxFormInputMultiFileMethods() },
    'MULTI-SELECT': { title: 'چند انتخابی', methods: new NgxFormInputMultiSelectMethods() },
    NAME: { title: 'نام و نام خانوادگی', methods: new NgxFormInputNameMethods() },
    'NATIONAL-CODE': { title: 'کد ملی', methods: new NgxFormInputNationalCodeMethods() },
    NUMBER: { title: 'مقدار عددی', methods: new NgxFormInputNumberMethods() },
    NUMERIC: { title: 'عبارت عددی', methods: new NgxFormInputNumericMethods() },
    'OPTION-LIST': { title: 'لیست گزینه‌ها', methods: new NgxFormInputOptionListMethods() },
    PASSWORD: { title: 'کلمه عبور', methods: new NgxFormInputPasswordMethods() },
    PERIOD: { title: 'محدوده زمانی', methods: new NgxFormInputPeriodMethods() },
    PRICE: { title: 'قیمت', methods: new NgxFormInputPriceMethods() },
    RANGE: { title: 'محدوده عددی', methods: new NgxFormInputRangeMethods() },
    SELECT: { title: 'لیست کشویی', methods: new NgxFormInputSelectMethods() },
    TAG: { title: 'تگ', methods: new NgxFormInputTagMethods() },
    TEXT: { title: 'متن یک خطی', methods: new NgxFormInputTextMethods() },
    TEXTAREA: { title: 'متن چند خطی', methods: new NgxFormInputTextareaMethods() },
    URL: { title: 'آدرس سایت', methods: new NgxFormInputUrlMethods() },
    USERNAME: { title: 'نام کاربری', methods: new NgxFormInputUsernameMethods() },
};
