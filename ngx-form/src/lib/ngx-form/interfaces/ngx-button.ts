import { INgxFormValues } from '../ngx-form.interface';

/**
 * Form extra button
 */
export interface INgxFormButton {
    /**
     * Copyright text
     * @type { string }
     */
    title: string;

    /**
     * Click callback method
     * @type { function(INgxFormValues): void }
     * @param { INgxFormValues } values key => value object of form inputs
     */
    action: (values: INgxFormValues) => void;
}
