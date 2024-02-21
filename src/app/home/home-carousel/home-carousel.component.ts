import { Component } from '@angular/core';
import { homeCarouselData } from '../../../data/mainCarousel';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent {
      carouselData: any

      currentSlide=0
      interval:any;


      ngOnInit() {
        this.carouselData=homeCarouselData;
      }

      autoPlay() {
        setInterval(()=> {
          this.nextSlide();
        },2000)
      }

      nextSlide() {
        this.currentSlide= (this.currentSlide+1)% this.carouselData.length;
      }
}
