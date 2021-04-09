import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appCard]'
})
export class CardDirective {

  constructor(private elemento: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') hover() {
    this.render.removeClass(this.elemento.nativeElement, 'mat-elevation-z3')
    this.render.addClass(this.elemento.nativeElement, 'mat-elevation-z6')
  }
  
  @HostListener('mouseleave') leave() {
    this.render.removeClass(this.elemento.nativeElement, 'mat-elevation-z6')
    this.render.addClass(this.elemento.nativeElement, 'mat-elevation-z3')
  }

}
