import { NgxFormInputMethods } from '../ngx-form.methods';
import { NgxFormInputTypes } from '../ngx-form.types';

import { NgxFormInputEmailMethods, NgxFormInputTextMethods } from '../inputs';

interface INgxFieldInputInfo {
    title: string;
    methods: NgxFormInputMethods<any, any>;
}

export const NgxFieldInputInfo: { [key in NgxFormInputTypes['type']]: INgxFieldInputInfo } = {
    EMAIL: { title: 'ایمیل', methods: new NgxFormInputEmailMethods() },
    TEXT: { title: 'متن یک خطی', methods: new NgxFormInputTextMethods() },
};
