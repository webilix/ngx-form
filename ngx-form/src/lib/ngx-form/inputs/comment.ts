import { FormControl, ValidatorFn } from '@angular/forms';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { INgxFormValues } from '../ngx-form.interface';

export interface INgxFormInputComment
    extends Omit<INgxFormInput, 'name' | 'id' | 'optional' | 'autoFocus' | 'keyboard' | 'disableOn' | 'hideOn'> {
    type: 'COMMENT';

    /**
     * Input caption copyright text
     * @type { string }
     * @override title
     */
    title: string;

    /**
     * Input value
     * @type { string }
     * @override value
     *
     * **NOTE:** Comment values will be omitted in form input values
     */
    value: string;

    /**
     * Input value update callback on form value changes
     * @type { function(INgxFormValues): string | null }
     * @param { INgxFormValues } values key => value object of form inputs
     * @returns string | null
     * @optional
     */
    onChange?: (values: INgxFormValues) => string | null;
}

export class NgxFormInputCommentMethods extends NgxFormMethods<INgxFormInputComment, string | null> {
    control(input: INgxFormInputComment, validators: ValidatorFn[]): FormControl<string | null> {
        return new FormControl<string | null>('', validators);
    }

    value(value: any): string | null {
        return null;
    }
}
