import { INgxFormValues } from '../ngx-form.interfaces';

/**
 * Basic form input interface
 */
export interface INgxFormInput {
    /**
     * Input name
     * @type { string }
     * @description Must be unique and will be used as **key** on return values.
     */
    name: string;

    /**
     * Input caption copyright text
     * @type { string }
     * @optional
     */
    title?: string;

    /**
     * Input hint copyright text
     * @type { string }
     * @optional
     */
    hint?: string;

    /**
     * Input value
     * @type { string }
     * @optional
     */
    value?: string;

    /**
     * Show input in english mode (LTR)
     * @type { boolean }
     * @optional false
     */
    english?: boolean;

    /**
     * Optional input, do not requires value on form submit
     * @type { boolean }
     * @optional false
     */
    optional?: boolean;

    /**
     * Input disable callback on form value changes
     * @type { function(INgxFormValues): boolean }
     * @param { INgxFormValues } values key => value object of form inputs
     * @returns boolean
     * @optional
     */
    disableOn?: (values: INgxFormValues) => boolean;

    /**
     * Input visibility callback on form value changes
     * @type { function(INgxFormValues): boolean }
     * @param { INgxFormValues } values key => value object of form inputs
     * @returns boolean
     * @optional
     *
     * **NOTE:** Hidden input acts as disabled and **null** will be returned as it's value
     */
    hideOn?: (values: INgxFormValues) => boolean;
}
