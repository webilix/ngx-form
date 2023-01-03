import { NgxReportInputs, NgxReportOperators } from '../ngx-report.type';

export type NgxReportValueTypes =
    | 'BANK-CARD'
    | 'DATE'
    | 'DOMAIN'
    | 'EMAIL'
    | 'IP'
    | 'MOBILE'
    | 'NATIONAL-CODE'
    | 'NUMBER'
    | 'OPTION'
    | 'TEXT';

export interface INgxReportValue {
    default: NgxReportValueTypes | null;
    extra?: Partial<{ [key in NgxReportOperators]: NgxReportValueTypes }>;
}

export const NgxReportValuesInfo: { [key in NgxReportInputs['type']]: INgxReportValue } = {
    'BANK-CARD': { default: 'BANK-CARD' },
    CHECKBOX: { default: null },
    DATE: { default: 'DATE' },
    DOMAIN: { default: 'DOMAIN' },
    EMAIL: { default: 'EMAIL', extra: { DOMAIN: 'DOMAIN' } },
    IP: { default: 'IP' },
    MOBILE: { default: 'MOBILE' },
    'MULTI-SELECT': { default: 'OPTION' },
    'NATIONAL-CODE': { default: 'NATIONAL-CODE' },
    NUMBER: { default: 'NUMBER' },
    SELECT: { default: 'OPTION' },
    TEXT: { default: 'TEXT' },
    TEXTAREA: { default: 'TEXT' },
    URL: { default: null, extra: { DOMAIN: 'DOMAIN' } },
};
