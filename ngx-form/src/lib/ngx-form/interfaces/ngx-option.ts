/**
 * Input option interface
 */
export interface INgxFormOption {
    /**
     * Option id
     * @type { string }
     */
    id: string;

    /**
     * Option title
     * @type { string }
     */
    title: string;
}

/**
 * Input option group interface
 */
export interface INgxFormOptionGroup {
    /**
     * Option title
     * @type { string }
     */
    title: string;

    /**
     * Option ids
     * @type { Array<string> }
     */
    ids: string[];
}
