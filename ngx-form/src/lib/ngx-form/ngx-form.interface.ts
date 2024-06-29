import { FloatLabelType, MatFormFieldAppearance } from '@angular/material/form-field';

import { INgxFormButton } from './interfaces';
import { NgxFormInputs } from './ngx-form.type';

/**
 * Form row type
 */
export type NgxFormRow =
    | NgxFormInputs
    | NgxFormInputs[]
    | { input: NgxFormInputs; flex: number }[]
    | { inputs: NgxFormInputs[]; flex: number[] };

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
     * Form input rows
     * @type { Array<NgxFormInputRow> }
     */
    inputs: (string | NgxFormRow)[];

    /**
     * Form extra buttons
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

    /**
     * Input label floating style
     * @type { FloatLabelType }
     * @enum  'always', 'auto'
     * @optional 'auto'
     */
    floatLabel?: FloatLabelType;
}

export interface INgxResponsiveFormSection {
    title?: string;
    description?: string;
    columns:
        | NgxFormInputs[]
        | [{ inputs: NgxFormInputs[]; flex?: number }, { inputs: NgxFormInputs[]; flex?: number }]
        | [
              { inputs: NgxFormInputs[]; flex?: number },
              { inputs: NgxFormInputs[]; flex?: number },
              { inputs: NgxFormInputs[]; flex?: number },
          ];
}

/**
 * Responsive form data interface
 */

export interface INgxResponsiveForm extends Omit<INgxForm, 'inputs'> {
    /**
     * Form Sections
     * @type { Array<INgxResponsiveFormSection> }
     *      */
    sections: INgxResponsiveFormSection[];

    /**
     * Maximum page width for mobile view
     * @type { Number }
     * @optional 600
     */
    mobileWidth?: number;
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
