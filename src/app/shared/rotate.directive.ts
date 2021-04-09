import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective {
  constructor(private elemento: ElementRef, private render: Renderer2) { }

  @HostListener('click') click() {
    if (this.elemento.nativeElement.classList.contains('rotate'))
      this.render.removeClass(this.elemento.nativeElement, 'rotate')
    else
      this.render.addClass(this.elemento.nativeElement, 'rotate')
  }
}
