import { INgxReportInput } from '../interfaces';

export interface INgxReportInputBankCard extends Omit<INgxReportInput, 'english'> {
    type: 'BANK-CARD';
}
