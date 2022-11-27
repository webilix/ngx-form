import { NgxFormInputTypes } from './ngx-form.types';
import { INgxFormButton } from './interfaces/ngx-button';

export interface INgxForm {
    submit: string;
    inputs: (NgxFormInputTypes | NgxFormInputTypes[])[];
    buttons?: INgxFormButton[];
}

export interface INgxFormValues {
    [key: string]: any;
}
