import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ selector: '[ngxAutoFocus]' })
export class NgxAutoFocusDirective implements OnInit {
    @Input({ required: true }) public ngxAutoFocus!: boolean;

    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        if (!!this.ngxAutoFocus || !this.elementRef) return;

        const input: HTMLInputElement = this.elementRef.nativeElement as HTMLInputElement;
        if (!input) return;

        if (this.elementRef.nativeElement['focus']) input.focus();
        if (this.elementRef.nativeElement['select']) input.select();
    }
}
