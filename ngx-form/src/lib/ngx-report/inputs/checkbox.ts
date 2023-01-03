import { INgxReportInput } from '../interfaces';

export interface INgxReportInputCheckbox extends Omit<INgxReportInput, 'english'> {
    type: 'CHECKBOX';
}
