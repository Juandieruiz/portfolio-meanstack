import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('textos', {static: true}) textos:any; // tomando elementos con Angular

  constructor() { }

  ngOnInit() {
    // tomando elementos con JavaScript
    //let opcion_clasica = alert((document.querySelector('#texto')?.innerHTML));
    // tomando elementos con Angular
    console.log(this.textos.nativeElement.innerHTML);
  }

}
