import { NgxReportInputs, NgxReportOperators } from '../ngx-report.type';

export interface INgxReportOperator {
    title: string;
    types: 'ALL' | NgxReportInputs['type'][];
    value: boolean;
}

export const NgxReportOperatorsInfo: { [key in NgxReportOperators]: INgxReportOperator } = {
    EMPTY: { title: 'بدون مقدار', types: 'ALL', value: false },
    VALUE: { title: 'داری مقدار', types: 'ALL', value: false },
    EQ: {
        title: 'برابر با',
        types: ['BANK-CARD', 'DATE', 'DOMAIN', 'EMAIL', 'IP', 'MOBILE', 'NATIONAL-CODE', 'NUMBER', 'TEXT'],
        value: true,
    },
    NE: {
        title: 'مخالف با',
        types: ['BANK-CARD', 'DATE', 'DOMAIN', 'EMAIL', 'IP', 'MOBILE', 'NATIONAL-CODE', 'NUMBER', 'TEXT'],
        value: true,
    },
    GT: { title: 'بزرگ‌تر از', types: ['DATE', 'NUMBER'], value: true },
    GE: { title: 'بزرگ‌تر مساوی با', types: ['DATE', 'NUMBER'], value: true },
    LT: { title: 'کوچک‌تر از', types: ['DATE', 'NUMBER'], value: true },
    LE: { title: 'کوچک‌تر مساوی با', types: ['DATE', 'NUMBER'], value: true },
    BETWEEN: { title: 'در محدوده', types: ['DATE', 'NUMBER'], value: true },
    BWITH: { title: 'شروع با', types: ['TEXT', 'TEXTAREA'], value: true },
    EWITH: { title: 'پایان با', types: ['TEXT', 'TEXTAREA'], value: true },
    CONTAINS: { title: 'شامل', types: ['TEXT', 'TEXTAREA'], value: true },
    IN: { title: 'یکی از مقادیر', types: ['MULTI-SELECT', 'SELECT'], value: true },
    NIN: { title: 'هیچکدام از مقادیر', types: ['MULTI-SELECT', 'SELECT'], value: true },
    DOMAIN: { title: 'از دامنه', types: ['EMAIL', 'URL'], value: true },
};

export const NgxReportOperatorsList: NgxReportOperators[] = Object.keys(NgxReportOperatorsInfo) as NgxReportOperators[];
