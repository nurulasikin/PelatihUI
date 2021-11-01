 import { OnInit } from '@angular/core';
import { AfterContentChecked, Component, ViewChild } from '@angular/core';
import { Autoplay, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {
Pagination,
EffectCube,
EffectCoverflow,


 } from  'swiper/core';

 SwiperCore.use ([Pagination , EffectCoverflow, Autoplay]);

@Component({
   selector: 'app-swiper',
  templateUrl: './swiper.page.html',
  styleUrls: ['./swiper.page.scss']

 })
export class SwiperPage implements  AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions ={
    slidesPerView: 'auto',
    pagination: true,
    effect:'coverflow',
   
    
    

  };

  images = [
    '/assets/image/logo-7eleven.png',
    '/assets/image/logo-7eleven.png',
    '/assets/image/logo-7eleven.png',
  ];
   
  constructor(){ }

  ngAfterContentChecked() {
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  }
  swiperSlideChanged(e) {
    console.log('changed: ',e );
  }
}
     
// var swiper = new swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
