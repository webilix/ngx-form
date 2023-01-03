import { INgxReportInput, INgxReportOption } from '../interfaces';

export interface INgxReportInputMultiSelect extends INgxReportInput {
    type: 'MULTI-SELECT';

    /**
     * Input options list
     * @type { Array<INgxReportOption> }
     */
    options: INgxReportOption[];
}
