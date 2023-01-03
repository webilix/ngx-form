import { INgxReportInput } from '../interfaces';

export interface INgxReportInputDate extends Omit<INgxReportInput, 'english'> {
    type: 'DATE';

    /**
     * Minimum acceptable value
     * @type { Date }
     * @optional
     */
    minDate?: Date;

    /**
     * Maximum acceptable value
     * @type { Date }
     * @optional
     */
    maxDate?: Date;
}
