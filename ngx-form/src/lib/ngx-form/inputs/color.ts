import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputColor extends Omit<INgxFormInput, 'english' | 'autoFocus' | 'floatLabel'> {
    type: 'COLOR';

    /**
     * Default colors list
     * @type { Array<string> }
     * @description In case of **undefined** or **empty list**, default HTML color input will be shown
     * @optional
     */
    colors?: string[];
}

export class NgxFormInputColorMethods extends NgxFormMethods<INgxFormInputColor, string | null> {
    control(input: INgxFormInputColor, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'رنگ';

        const value: string | null =
            input.value !== undefined && input.value !== ''
                ? input.colors && input.colors.length !== 0
                    ? input.colors.find((color) => color === input.value)
                        ? input.value
                        : null
                    : input.value
                : null;
        return new FormControl<string | null>(value, validators);
    }

    value(value: any, input: INgxFormInputColor): string | null {
        return Helper.IS.string(value) && value !== ''
            ? input.colors && input.colors.length !== 0
                ? input.colors.find((color) => color === value)
                    ? value
                    : null
                : value
            : null;
    }
}
