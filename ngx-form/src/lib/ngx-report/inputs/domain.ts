import { INgxReportInput } from '../interfaces';

export interface INgxReportInputDomain extends Omit<INgxReportInput, 'english'> {
    type: 'DOMAIN';
}
