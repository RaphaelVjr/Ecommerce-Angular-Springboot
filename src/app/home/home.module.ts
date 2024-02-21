import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';



@NgModule({
  declarations: [HomeComponent, HomeCarouselComponent],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
