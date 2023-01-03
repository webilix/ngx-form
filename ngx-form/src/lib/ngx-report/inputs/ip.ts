import { INgxReportInput } from '../interfaces';

export interface INgxReportInputIp extends Omit<INgxReportInput, 'english'> {
    type: 'IP';
}
