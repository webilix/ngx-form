/**
 * Basic report input interface
 */
export interface INgxReportInput {
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
    title: string;

    /**
     * Show input in english mode (LTR)
     * @type { boolean }
     * @optional false
     */
    english?: boolean;
}
