import { ValidatorFn, FormControl } from '@angular/forms';

import { NgxFormMethods } from '../classes';
import { INgxFormInput, INgxFormOption, INgxFormOptionGroup } from '../interfaces';
import { Helper } from '@webilix/helper-library';

export interface INgxFormInputSelect extends Omit<INgxFormInput, 'id' | 'autoFocus' | 'keyboard'> {
    type: 'SELECT';

    /**
     * Input caption copyright text
     * @type { string }
     * @override title
     */
    title: string;

    /**
     * Input options list
     * @type { Array<INgxFormOption> }
     */
    options: INgxFormOption[];

    /**
     * Input option groups list
     * @type { Array<INgxFormOptionGroup> }
     * @optional
     */
    groups?: INgxFormOptionGroup[];

    /**
     * Titla of groups menu
     * @type { string }
     * @optional
     */
    groupTitle?: string;
}

export class NgxFormInputSelectMethods extends NgxFormMethods<INgxFormInputSelect, string | null> {
    control(input: INgxFormInputSelect, validators: ValidatorFn[]): FormControl<string | null> {
        const options: string[] = input.options.map((option) => option.id);
        let value: string | null = input.value && options.includes(input.value) ? input.value : null;

        // Select default value if there is only one option and value is required
        if (input.options.length === 1 && !input.optional) value = input.options[0].id;

        const groups = input.groups && Helper.IS.array(input.groups) ? input.groups : [];
        input.groups = groups
            .map((group) => ({ ...group, ids: group.ids.filter((id: string) => options.includes(id)) }))
            .filter((group) => group.ids.length !== 0);

        return new FormControl<string | null>(value, validators);
    }

    value(value: any, input: INgxFormInputSelect): string | null {
        return value && input.options.find((o) => o.id === value) ? value : null;
    }
}
