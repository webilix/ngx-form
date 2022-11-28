import { NgxFormInputMethods } from '../ngx-form.methods';
import { NgxFormInputTypes } from '../ngx-form.types';

import {
    NgxFormInputAutoCompleteMethods,
    NgxFormInputBankCard,
    NgxFormInputCommentMethods,
    NgxFormInputEmailMethods,
    NgxFormInputMobileMethods,
    NgxFormInputMultiSelectMethods,
    NgxFormInputNameMethods,
    NgxFormInputNumberMethods,
    NgxFormInputPasswordMethods,
    NgxFormInputTextMethods,
    NgxFormInputUsernameMethods,
} from '../inputs';

interface INgxFieldInputInfo {
    title: string;
    methods: NgxFormInputMethods<any, any>;
}

export const NgxFieldInputInfo: { [key in NgxFormInputTypes['type']]: INgxFieldInputInfo } = {
    // VIEWS
    COMMENT: { title: 'توضیحات', methods: new NgxFormInputCommentMethods() },
    // INPUTS
    'AUTO-COMPLETE': { title: 'لیست تکمیلی', methods: new NgxFormInputAutoCompleteMethods() },
    'BANK-CARD': { title: 'شماره کارت بانکی', methods: new NgxFormInputBankCard() },
    EMAIL: { title: 'ایمیل', methods: new NgxFormInputEmailMethods() },
    MOBILE: { title: 'موبایل', methods: new NgxFormInputMobileMethods() },
    'MULTI-SELECT': { title: 'چند انتخابی', methods: new NgxFormInputMultiSelectMethods() },
    NAME: { title: 'نام و نام خانوادگی', methods: new NgxFormInputNameMethods() },
    NUMBER: { title: 'مقدار عددی', methods: new NgxFormInputNumberMethods() },
    PASSWORD: { title: 'کلمه عبور', methods: new NgxFormInputPasswordMethods() },
    TEXT: { title: 'متن یک خطی', methods: new NgxFormInputTextMethods() },
    USERNAME: { title: 'نام کاربری', methods: new NgxFormInputUsernameMethods() },
};
