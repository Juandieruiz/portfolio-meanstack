import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  
  constructor(public el: ElementRef) { // el es una variable que se crea en el constructor
    
    } 

    ngOnInit(){ // se ejecuta cuando se inicia el componente
      let element = this.el.nativeElement; // el.nativeElement es el elemento que se esta resaltando
      element.style.backgroundColor = 'blue'; // cambiando el color de fondo
      element.style.color = 'white';  // cambiando el color del texto
      element.style.padding = '20px';  // agregando padding
      element.style.margin = '20px';0   // agregando margen
      element.style.border = '1px solid black'; // agregando borde

      element.innerText = element.innerText.toUpperCase(); // cambiando el texto a mayusculas
    }
}
