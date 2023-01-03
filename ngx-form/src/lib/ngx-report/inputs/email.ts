import { INgxReportInput } from '../interfaces';

export interface INgxReportInputEmail extends Omit<INgxReportInput, 'english'> {
    type: 'EMAIL';
}
