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
     * Maximum page width for mobile view in responsive forms
     * @type { Number }
     * @optional 600
     */
    mobileWidth: number;
}
