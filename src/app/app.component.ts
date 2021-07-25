import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);

@Component({
  selector: "app-swiper-example",
  template: `<swiper
    [effect]="'cube'"
    [grabCursor]="true"
    [cubeEffect]="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }"
    [pagination]="true"
    class="mySwiper"
  >
    <ng-template swiperSlide
      ><img src="/assets/p1.jpeg" /></ng-template
    ><ng-template swiperSlide
      ><img src="/assets/p2.jpeg" /></ng-template
    ><ng-template swiperSlide
      ><img src="/assets/p3.jpeg" /></ng-template
    ><ng-template swiperSlide
      ><img src="/assets/p4.jpeg"
    /></ng-template>
  </swiper>`,
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
