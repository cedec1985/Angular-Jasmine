import { Directive,ElementRef,HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class Attribute {

  constructor(private el :ElementRef) {
 console.log(el);
}
  @Input('appAttribute') color: string | undefined;
  // This input allows the directive to accept a color value

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    //  on met à jour le background de l'élément sur lequel est appliquée la directive
  }
}

