import { INgxFormValues } from '../ngx-form.interfaces';

export interface INgxFormInput {
    name: string;
    title?: string;
    hint?: string;
    value?: string;
    english?: boolean;
    optional?: boolean;
    disableOn?: (values: INgxFormValues) => boolean;
    hideOn?: (values: INgxFormValues) => boolean;
}
