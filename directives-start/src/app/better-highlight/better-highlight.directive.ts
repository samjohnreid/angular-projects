import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef,  private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'peachpuff');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'black');
  }

}
