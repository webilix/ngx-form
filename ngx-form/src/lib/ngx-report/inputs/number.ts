import { INgxReportInput } from '../interfaces';

export interface INgxReportInputNumber extends Omit<INgxReportInput, 'english'> {
    type: 'NUMBER';

    /**
     * Accept negative values
     * @type { boolean }
     * @optional false
     */
    negative?: boolean;

    /**
     * Accept decimal values
     * @type { boolean }
     * @optional false
     */
    decimal?: boolean;
}
