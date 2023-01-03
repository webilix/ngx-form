import { INgxReportInput } from '../interfaces';

export interface INgxReportInputNationalCode extends Omit<INgxReportInput, 'english'> {
    type: 'NATIONAL-CODE';
}
