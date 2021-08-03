import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Swiper } from "swiper";
import { BannerComponent } from "./banner/banner.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-container')
  }

}
