import { MatFormFieldAppearance } from '@angular/material/form-field';

/**
 * NgxForm config
 */
export interface INgxFormConfig {
    /**
     * Form input appearance
     * @type { MatFormFieldAppearance }
     * @enum 'fill', 'outline'
     * @optional 'fill'
     */
    appearance: MatFormFieldAppearance;

    /**
     * Timeout to prevent double-click on form submit (in seconds)
     * @type { number }
     * @optional
     */
    submitTimeout?: number;

    /**
     * Maximum page width for mobile view in responsive forms
     * @type { Number }
     * @optional 600
     */
    mobileWidth: number;

    /**
     * Column gap width in responsive forms
     * @type { String }
     * @optional
     */
    columnGap?: string;
}
