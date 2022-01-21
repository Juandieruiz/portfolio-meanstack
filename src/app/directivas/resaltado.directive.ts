import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el: ElementRef) {
    
    } 

    ngOnInit(){
      let element = this.el.nativeElement;
      element.style.backgroundColor = 'blue';
      element.style.color = 'white';
      element.style.padding = '20px';
      element.style.margin = '20px';0
      element.style.border = '1px solid black';

      element.innerText = element.innerText.toUpperCase();
    }
}
