import { FormControl, ValidatorFn } from '@angular/forms';

import { Helper } from '@webilix/helper-library';

import { NgxFormMethods } from '../classes';
import { INgxFormInput } from '../interfaces';

export interface INgxFormInputIcon extends Omit<INgxFormInput, 'english' | 'autofocus'> {
    type: 'ICON';

    /**
     * List of acceptable icons
     * @type { Array<string> }
     */
    icons: string[];
}

export class NgxFormInputIconMethods extends NgxFormMethods<INgxFormInputIcon, string | null> {
    control(input: INgxFormInputIcon, validators: ValidatorFn[]): FormControl<string | null> {
        input.title = input.title || 'آیکون';

        input.icons = input.icons
            .filter((icon: string) => Helper.IS.string(icon) && icon.length > 1)
            .filter((icon: string, i: number, a: string[]) => a.indexOf(icon) === i);
        const value: string | null = input.icons.includes(input.value || '') ? input.value || '' : null;
        return new FormControl<string | null>(value, validators);
    }

    value(value: any, input: INgxFormInputIcon): string | null {
        return Helper.IS.string(value) && input.icons.includes(value) ? value : null;
    }
}
