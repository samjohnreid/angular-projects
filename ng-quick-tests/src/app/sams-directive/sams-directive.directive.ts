import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSamsDirective]'
})

export class SamsDirective implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.border = '10px solid pink';
    this.elementRef.nativeElement.style.padding = '20px';
  }

}
