import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  images = [
    { img: "../../../assets/images/logo.jpg" },
    { img: "../../../assets/images/logo.jpg" },
    { img: "../../../assets/images/logo.jpg" },
    { img: "../../../assets/images/logo.jpg" },
    { img: "../../../assets/images/logo.jpg" },
    { img: "../../../assets/images/logo.jpg" },
    { img: "../../../assets/images/logo.jpg" },
    { img: "../../../assets/images/logo.jpg" },
    { img: "../../../assets/images/logo.jpg" },


  ];

  slideConfig ={
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "dots": true,
    "infinite": true,

  }

  constructor() { }

  ngOnInit(): void {
  }

}
