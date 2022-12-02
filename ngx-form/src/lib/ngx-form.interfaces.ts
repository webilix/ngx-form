import { NgxFormInputTypes } from './ngx-form.types';
import { INgxFormButton } from './interfaces/ngx-button';

/**
 * Form data interface
 */
export interface INgxForm {
    /**
     * Submit button copyright
     */
    submit: string;

    /**
     * List of form inputs
     */
    inputs: (NgxFormInputTypes | NgxFormInputTypes[])[];

    /**
     * List of form extra buttons
     * @optional
     */
    buttons?: INgxFormButton[];
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
