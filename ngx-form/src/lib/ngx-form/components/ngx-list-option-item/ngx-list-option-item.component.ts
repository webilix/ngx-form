import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Helper } from '@webilix/helper-library';

@Component({
    selector: 'ngx-list-option-item',
    templateUrl: './ngx-list-option-item.component.html',
    styleUrls: ['./ngx-list-option-item.component.scss'],
})
export class NgxListOptionItemComponent implements OnInit, OnChanges {
    @Input() index?: number;
    @Input() item?: string;
    @Input() format?: 'BANK-CARD' | 'DOMAIN' | 'EMAIL' | 'IP' | 'MOBILE' | 'NATIONAL-CODE' | 'NUMERIC' | 'URL';
    @Input() english?: boolean;
    @Input() disabled?: boolean;

    @Output() update: EventEmitter<string> = new EventEmitter<string>();
    @Output() delete: EventEmitter<void> = new EventEmitter<void>();

    public status: 'VIEW' | 'UPDATE' | 'DELETE' = 'VIEW';

    public isNumeric: boolean = false;
    public mask: string = '';
    public suffix: string = '';
    public isValid: boolean = true;

    ngOnInit(): void {
        this.isNumeric =
            this.format === 'BANK-CARD' ||
            this.format === 'MOBILE' ||
            this.format === 'NATIONAL-CODE' ||
            this.format === 'NUMERIC';

        switch (this.format) {
            case 'BANK-CARD':
                this.mask = '0000-0000-0000-0000';
                break;
            case 'MOBILE':
                this.suffix = '09';
                this.mask = '00-000-0000';
                break;
            case 'NATIONAL-CODE':
                this.mask = '0000000000';
                break;
            case 'NATIONAL-CODE':
                this.mask = '9';
                break;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.status = this.status === 'DELETE' ? 'VIEW' : this.status;
    }

    checkValid(value: string): string {
        this.isValid = true;
        value = value.trim();
        if (value === '' || !this.format) return value;

        switch (this.format) {
            case 'BANK-CARD':
                value = value.replace(/-/gi, '');
                this.isValid = Helper.IS.STRING.bankCard(value);
                break;

            case 'DOMAIN':
                this.isValid = Helper.IS.STRING.domain(value);
                break;

            case 'EMAIL':
                this.isValid = Helper.IS.STRING.email(value);
                break;

            case 'IP':
                this.isValid = Helper.IS.STRING.ip4(value);
                break;

            case 'MOBILE':
                value = '09' + value.replace(/-/gi, '');
                this.isValid = Helper.IS.STRING.mobile(value);
                break;

            case 'NATIONAL-CODE':
                this.isValid = Helper.IS.STRING.nationalCode(value);
                break;

            case 'NUMERIC':
                this.isValid = Helper.IS.STRING.numeric(value);
                break;

            case 'URL':
                this.isValid = Helper.IS.STRING.url(value);
                break;
        }

        return value;
    }

    checkValue(input: HTMLInputElement): void {
        if (this.disabled || input.value.trim() === '') return;

        const value: string = this.checkValid(input.value.trim());
        if (!this.isValid) return;

        this.update.emit(value);
        this.status = 'VIEW';
    }
}
