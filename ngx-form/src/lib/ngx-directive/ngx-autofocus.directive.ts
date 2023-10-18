import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[ngxAutoFocus]' })
export class NgxAutoFocusDirective implements AfterViewInit {
    @Input({ required: true }) public ngxAutoFocus!: boolean;

    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit(): void {
        if (!this.ngxAutoFocus || !this.elementRef) return;

        const input: HTMLInputElement = this.elementRef.nativeElement as HTMLInputElement;
        if (!input) return;

        setTimeout(() => {
            if (input.focus) input.focus();
            if (input.select) input.select();
        }, 0);
    }
}
