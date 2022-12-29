import { FormControl, ValidatorFn } from '@angular/forms';

import { INgxFormInput, NgxFormMethods } from '../interfaces';

export interface INgxFormInputComment extends Omit<INgxFormInput, 'optional' | 'disableOn'> {
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
}

export class NgxFormInputCommentMethods extends NgxFormMethods<INgxFormInputComment, string | null> {
    control(input: INgxFormInputComment, validators: ValidatorFn[]): FormControl<string | null> {
        return new FormControl<string | null>('', validators);
    }

    value(value: any): string | null {
        return null;
    }
}
