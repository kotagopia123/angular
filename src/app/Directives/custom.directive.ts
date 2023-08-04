import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el: ElementRef) { } 

  @Input() appCustom: string = '';
  defaultColor: string= 'lightgreen';
  @HostBinding('style.background') background: string= '';
  @HostBinding('style.border') border: string = '';
  @HostBinding('title') title: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appCustom || this.defaultColor);
    this.border = '5px solid pink';
    this.title = 'Sample tooltip';
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    this.border = '';
    this.title = '';
  }
  highlight(color: string) {
    this.background = color;
  }



}
