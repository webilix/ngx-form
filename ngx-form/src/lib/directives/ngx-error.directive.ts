import { Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({ selector: 'form.ngxForm' })
export class NgxErrorDirective {
    constructor(private elementRef: ElementRef, @Optional() private formGroupDirective: FormGroupDirective) {}

    @HostListener('submit') onSubmit(): void {
        if (this.formGroupDirective && this.formGroupDirective.control.invalid) {
            const ngInvalidControl: HTMLElement = this.elementRef.nativeElement.querySelector('.ng-invalid');
            if (ngInvalidControl) return this.scrollToElement(ngInvalidControl);
        }

        const dfInvalidControl: HTMLElement = this.elementRef.nativeElement.querySelector('.karbon-invalid');
        if (dfInvalidControl) this.scrollToElement(dfInvalidControl);
    }

    private scrollToElement(element: HTMLElement): void {
        const labelOffset: number = 150;
        const top: number = element.getBoundingClientRect().top + window.scrollY - labelOffset;
        window.scroll({ top, left: 0, behavior: 'smooth' });
    }
}
