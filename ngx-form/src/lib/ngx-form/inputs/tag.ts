import { ValidatorFn, FormControl } from '@angular/forms';

import { Validator } from '@webilix/validator-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';
import { NgxMaxCountValidator, NgxMinCountValidator } from '../validators';

export interface INgxFormInputTag extends Omit<INgxFormInput, 'english' | 'value' | 'optional'> {
    type: 'TAG';

    /**
     * Input value
     * @type { Array<string> }
     * @override value
     * @optional
     */
    value?: string[];

    /**
     * Default tags list
     * @type { Array<string> }
     */
    tags: string[];

    /**
     * Minimum number of required entered tags
     * @type { number }
     * @optional
     */
    minCount?: number;

    /**
     * Maximum number of required entered tags
     * @type { number }
     * @optional
     */
    maxCount?: number;
}

export class NgxFormInputTagMethods extends NgxFormMethods<INgxFormInputTag, string[] | null> {
    control(input: INgxFormInputTag, validators: ValidatorFn[]): FormControl<string[] | null> {
        input.title = input.title || 'تگ';
        if (input.minCount) validators.push(NgxMinCountValidator<string>(input.minCount));
        if (input.maxCount) validators.push(NgxMaxCountValidator<string>(input.maxCount));

        const value: string[] = (Array.isArray(input.value) ? input.value : []).filter(
            (value: string) => Validator.VALUE.isString(value) && value.length > 0,
        );
        return new FormControl<string[] | null>(value, validators);
    }

    value(value: any): string[] | null {
        return Array.isArray(value) ? value : [];
    }
}
