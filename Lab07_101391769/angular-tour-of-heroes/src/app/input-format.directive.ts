import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
  standalone: true
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let inputValue: string = this.el.nativeElement.value;
    this.el.nativeElement.value = inputValue.toUpperCase();
  }

}
