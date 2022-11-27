import { NgxFormInputMethods } from '../ngx-form.methods';
import { NgxFormInputTypes } from '../ngx-form.types';

import { NgxFormInputTextMethods } from '../inputs';

interface INgxFieldInputInfo {
    title: string;
    methods: NgxFormInputMethods<any, any>;
}

export const NgxFieldInputInfo: { [key in NgxFormInputTypes['type']]: INgxFieldInputInfo } = {
    TEXT: { title: 'متن یک خطی', methods: new NgxFormInputTextMethods() },
};
