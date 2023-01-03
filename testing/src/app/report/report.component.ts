import { Component } from '@angular/core';

import { INgxReport, NgxReportInputs } from '@ngx-form';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss'],
})
export class ReportComponent {
    public ngxInputs: NgxReportInputs[] = [
        { name: 'bank-card', type: 'BANK-CARD', title: 'شماره کارت بانکی' },
        { name: 'checkbox', type: 'CHECKBOX', title: 'یک انتخابی' },
        {
            name: 'date',
            type: 'DATE',
            title: 'تاریخ',
            minDate: new Date(new Date().getTime() - 90 * 24 * 3600 * 1000),
            maxDate: new Date(new Date().getTime() + 90 * 24 * 3600 * 1000),
        },
        { name: 'domain', type: 'DOMAIN', title: 'دامنه سایت' },
        { name: 'email', type: 'EMAIL', title: 'ایمیل' },
        { name: 'ip', type: 'IP', title: 'آدرس آی‌پی' },
        { name: 'mobile', type: 'MOBILE', title: 'موبایل' },
        {
            name: 'multi-select',
            type: 'MULTI-SELECT',
            title: 'چند انتخابی',
            options: [
                { id: 'option-1', title: 'گزینه اول' },
                { id: 'option-2', title: 'گزینه دوم' },
                { id: 'option-3', title: 'گزینه سوم' },
            ],
        },
        { name: 'national-code', type: 'NATIONAL-CODE', title: 'کد ملی' },
        { name: 'number', type: 'NUMBER', title: 'مقدار عددی', decimal: true, negative: true },
        {
            name: 'select',
            type: 'SELECT',
            title: 'لیست کشویی',
            options: [
                { id: 'option-1', title: '1ST Option' },
                { id: 'option-2', title: '2ND Option' },
                { id: 'option-3', title: '3RD Option' },
            ],
            english: true,
        },
        { name: 'text', type: 'TEXT', title: 'متن یک خطی' },
        { name: 'textarea', type: 'TEXTAREA', title: 'متن چند خطی', english: true },
        { name: 'url', type: 'URL', title: 'آدرس سایت' },
    ];

    public ngxReport: INgxReport | null = {
        join: 'AND',
        conditions: [
            { input: 'checkbox', operator: 'EMPTY', value: null },
            { input: 'number', operator: 'BETWEEN', value: [12, 21] },
            { input: 'date', operator: 'BETWEEN', value: [new Date(), new Date()] },
            {
                join: 'OR',
                conditions: [
                    { input: 'bank-card', operator: 'EQ', value: '1234567812349995' },
                    { input: 'domain', operator: 'EQ', value: 'domain.com' },
                    { input: 'email', operator: 'EQ', value: 'email@domain.com' },
                    { input: 'ip', operator: 'EQ', value: '127.0.0.1' },
                    { input: 'mobile', operator: 'EQ', value: '09123456789' },
                    { input: 'national-code', operator: 'EQ', value: '0123456789' },
                    { input: 'url', operator: 'DOMAIN', value: 'domain.com' },
                ],
            },
            {
                join: 'OR',
                conditions: [
                    { input: 'text', operator: 'BWITH', value: 'شروع با' },
                    { input: 'textarea', operator: 'EWITH', value: 'Multi-line text' },
                ],
            },
            {
                join: 'OR',
                conditions: [
                    { input: 'multi-select', operator: 'IN', value: ['option-1', 'option-2'] },
                    { input: 'select', operator: 'NIN', value: ['option-3'] },
                ],
            },
        ],
    };

    public log = console.log;

    showValues(report: INgxReport): void {
        this.log(report);
    }
}
