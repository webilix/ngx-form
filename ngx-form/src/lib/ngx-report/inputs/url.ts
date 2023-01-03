import { INgxReportInput } from '../interfaces';

export interface INgxReportInputUrl extends Omit<INgxReportInput, 'english'> {
    type: 'URL';
}
