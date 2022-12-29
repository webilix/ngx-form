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
     * @type { function(): void }
     */
    action: () => void;
}
