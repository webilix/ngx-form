import { INgxReportInput, INgxReportOption } from '../interfaces';

export interface INgxReportInputSelect extends INgxReportInput {
    type: 'SELECT';

    /**
     * Input options list
     * @type { Array<INgxReportOption> }
     */
    options: INgxReportOption[];
}
