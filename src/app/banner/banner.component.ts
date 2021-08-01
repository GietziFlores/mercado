import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  image : string []=[
    'assets/images/banr1.png',
    'assets/images/humo.png',
    'assets/images/humo2.png',

  ]
  constructor() { }

  ngOnInit() {
  }

}
