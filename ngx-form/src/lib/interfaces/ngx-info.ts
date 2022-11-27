import { NgxFormInputMethods } from '../ngx-form.methods';
import { NgxFormInputTypes } from '../ngx-form.types';

import {
    NgxFormInputAutoCompleteMethods,
    NgxFormInputEmailMethods,
    NgxFormInputMobileMethods,
    NgxFormInputNumberMethods,
    NgxFormInputTextMethods,
} from '../inputs';

interface INgxFieldInputInfo {
    title: string;
    methods: NgxFormInputMethods<any, any>;
}

export const NgxFieldInputInfo: { [key in NgxFormInputTypes['type']]: INgxFieldInputInfo } = {
    'AUTO-COMPLETE': { title: 'لیست تکمیلی', methods: new NgxFormInputAutoCompleteMethods() },
    EMAIL: { title: 'ایمیل', methods: new NgxFormInputEmailMethods() },
    MOBILE: { title: 'موبایل', methods: new NgxFormInputMobileMethods() },
    NUMBER: { title: 'مقدار عددی', methods: new NgxFormInputNumberMethods() },
    TEXT: { title: 'متن یک خطی', methods: new NgxFormInputTextMethods() },
};
