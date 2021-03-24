import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-slidershow',
  templateUrl: './slidershow.component.html',
  styleUrls: ['./slidershow.component.css']
})

export class SlidershowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];

  public mySwiper:Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    
    this.mySwiper = new Swiper('.swiper-container', {

      loop: true,
      
    });

  }

  ngOnInit(): void {
    console.log(this.movies);
  }

  onSlideNext(){  
    this.mySwiper.slideNext();
  }

  onSliderPrev(){
    this.mySwiper.slidePrev();
  }

}
