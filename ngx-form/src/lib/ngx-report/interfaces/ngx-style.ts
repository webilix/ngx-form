/**
 * NgxReport config
 */
export interface INgxReportStyle {
    /**
     * Farsi (Persian) font name
     * @type { string }
     * @optional 'Yekan'
     */
    faFont: string;

    /**
     * English font name
     * @type { string }
     * @optional 'Roboto, "Helvetica Neue", sans-serif'
     */
    enFont: string;

    /**
     * Font size
     * @type { string }
     * @optional '12px'
     */
    faSize: string;

    /**
     * Material icon font name
     * @type { string }
     * @optional 'Material Icons Outlined'
     */
    iconFont: string;

    /**
     * Material icon font size
     * @type { string }
     * @optional '16px'
     */
    iconSize: string;

    /**
     * Report inputs primary color
     * @type { string }
     * @optional 'rgb(29, 91, 116)'
     */
    primaryColor: string;

    /**
     * Report inputs warn color
     * @type { string }
     * @optional 'rgb(255, 49, 27)'
     */
    warnColor: string;

    /**
     * Report inputs border color
     * @type { string }
     * @optional 'rgb(187, 206, 213)'
     */
    borderColor: string;

    /**
     * Report inputs background color
     * @type { string }
     * @optional 'rgb(232, 239, 241)'
     */
    backgroundColor: string;
}
