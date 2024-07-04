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

/**
 * Input group interface
 */
export interface INgxFormGroup {
    /**
     * Group id
     * @type { string }
     */
    id: string;

    /**
     * Group title
     * @type { string }
     */
    title: string;

    /**
     * Group icon
     * @type { string }
     * @optional
     */
    icon?: string;
}
