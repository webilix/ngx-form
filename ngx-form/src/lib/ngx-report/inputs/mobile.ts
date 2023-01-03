import { INgxReportInput } from '../interfaces';

export interface INgxReportInputMobile extends Omit<INgxReportInput, 'english'> {
    type: 'MOBILE';
}
