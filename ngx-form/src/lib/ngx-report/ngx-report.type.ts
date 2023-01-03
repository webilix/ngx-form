import {
    INgxReportInputBankCard,
    INgxReportInputCheckbox,
    INgxReportInputDate,
    INgxReportInputDomain,
    INgxReportInputEmail,
    INgxReportInputIp,
    INgxReportInputMobile,
    INgxReportInputMultiSelect,
    INgxReportInputNationalCode,
    INgxReportInputNumber,
    INgxReportInputSelect,
    INgxReportInputText,
    INgxReportInputTextarea,
    INgxReportInputUrl,
} from './inputs';

export type NgxReportInputs =
    | INgxReportInputBankCard
    | INgxReportInputCheckbox
    | INgxReportInputDate
    | INgxReportInputDomain
    | INgxReportInputEmail
    | INgxReportInputIp
    | INgxReportInputMobile
    | INgxReportInputMultiSelect
    | INgxReportInputNationalCode
    | INgxReportInputNumber
    | INgxReportInputSelect
    | INgxReportInputText
    | INgxReportInputTextarea
    | INgxReportInputUrl;

export type NgxReportOperators =
    | 'EMPTY'
    | 'VALUE'
    | 'EQ'
    | 'NE'
    | 'GT'
    | 'GE'
    | 'LT'
    | 'LE'
    | 'BETWEEN'
    | 'BWITH'
    | 'EWITH'
    | 'CONTAINS'
    | 'IN'
    | 'NIN'
    | 'DOMAIN';
