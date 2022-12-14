import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({ selector: '[ngxAutoheight]' })
export class NgxAutoheightDirective {
    @Input() public ngxAutoheight: boolean = false;
    @Input() public minHeight: number = 0;
    @Input() public maxHeight: number = 0;

    private _focused: boolean = false;
    @HostListener('focus')
    private focus(): void {
        this._focused = true;
    }
    @HostListener('blur')
    private blur(): void {
        this._focused = false;
    }

    constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

    public ngAfterViewInit(): void {
        this.resize(true);
    }

    @HostListener('input')
    private resize(forced?: boolean): void {
        if (this.ngxAutoheight !== true || (!forced && !this._focused)) return;

        const textarea = this.elementRef.nativeElement as HTMLTextAreaElement;
        const borderHeight = textarea.offsetHeight - textarea.clientHeight;
        this.setHeight('auto');

        let height: number = textarea.scrollHeight + borderHeight;
        if (this.minHeight && this.minHeight > height) height = this.minHeight;
        if (this.maxHeight && this.maxHeight < height) height = this.maxHeight;
        this.setHeight(`${height}px`);
    }

    private setHeight(value: string): void {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'height', value);
        this.renderer2.setStyle(this.elementRef.nativeElement, 'overflow', 'hidden');
    }
}
