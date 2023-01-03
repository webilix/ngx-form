import { MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormButton } from './interfaces';
import { NgxFormInputTypes } from './ngx-form.type';

/**
 * Form data interface
 */
export interface INgxForm {
    /**
     * Submit button copyright
     * @type { string }
     */
    submit: string;

    /**
     * List of form inputs
     * @type { NgxFormInputTypes | Array<NgxFormInputTypes> }
     */
    inputs: (NgxFormInputTypes | NgxFormInputTypes[])[];

    /**
     * List of form extra buttons
     * @type { Array<INgxFormButton> }
     * @optional
     */
    buttons?: INgxFormButton[];

    /**
     * Form input appearance
     * @type { MatFormFieldAppearance }
     * @enum 'fill', 'outline'
     * @optional 'fill'
     */
    appearance?: MatFormFieldAppearance;
}

/**
 * Form input values
 *
 * @returns Object of key => value
 * @property { key } string Name of each input in form.
 * @property { value } any Input values entered/selected on form.
 */
export interface INgxFormValues {
    [key: string]: any;
}
