import { Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({ selector: 'form.ngxForm' })
export class NgxErrorDirective {
    constructor(private elementRef: ElementRef, @Optional() private formGroupDirective: FormGroupDirective) {}

    @HostListener('submit') onSubmit(): void {
        if (this.formGroupDirective && this.formGroupDirective.control.invalid) {
            const invalidControl: HTMLElement = this.elementRef.nativeElement.querySelector('.ng-invalid');
            if (invalidControl) return this.scrollToElement(invalidControl);
        }

        const invalidControl: HTMLElement = this.elementRef.nativeElement.querySelector('.ngx-form-invalid');
        if (invalidControl) this.scrollToElement(invalidControl);
    }

    private scrollToElement(element: HTMLElement): void {
        const labelOffset: number = 150;
        const top: number = element.getBoundingClientRect().top + window.scrollY - labelOffset;
        window.scroll({ top, left: 0, behavior: 'smooth' });
    }
}
