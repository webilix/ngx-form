import { ThemePalette } from '@angular/material/core';

import { INgxFormValues } from '../ngx-form.interface';
import { FloatLabelType } from '@angular/material/form-field';

interface INgxFormInputButton {
    /**
     * Button icon
     * @type { string }
     */
    icon: string;

    /**
     * Button click function
     * @type { function(INgxFormValues): void }
     * @param { INgxFormValues } values key => value object of form inputs
     */
    click: (values: INgxFormValues) => void;

    /**
     * Button color
     * @type { string }
     * @enum 'primary', 'accent', 'warn'
     * @optional primary
     */
    color?: ThemePalette;

    /**
     * Button disable callback on form value changes
     * @type { function(INgxFormValues): boolean }
     * @param { INgxFormValues } values key => value object of form inputs
     * @returns boolean
     * @optional
     */
    disableOn?: (values: INgxFormValues) => boolean;
}

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
     * Input id
     * @type { string }
     * @optional
     */
    id?: string;

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
     * Input extra button
     * @type { INgxFormInputButton }
     * @optional
     */
    button?: INgxFormInputButton;

    /**
     * Input description copyright text
     * @description this text will be shown at the bottom of input form-field
     * @type { string }
     * @optional
     */
    description?: string;

    /**
     * Set input auto-focus (works only on first input that has this as true)
     * @type { boolean }
     * @optional
     */
    autoFocus?: boolean;

    /**
     * Input label floating style
     * @type { FloatLabelType }
     * @enum  'always', 'auto'
     * @optional 'auto'
     */
    floatLabel?: FloatLabelType;

    /**
     * Keyboard event options (Press / Up / DOwn)
     * @type { Object }
     * @optional
     */
    keyboard?: {
        down?: (event: KeyboardEvent) => void;
        press?: (event: KeyboardEvent) => void;
        up?: (event: KeyboardEvent) => void;
    };

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
