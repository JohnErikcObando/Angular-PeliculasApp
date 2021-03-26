import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlidershowComponent } from './slidershow/slidershow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';



@NgModule({
  declarations: [
    NavbarComponent, 
    SlidershowComponent, 
    PeliculasPosterGridComponent, 
    CastSlideshowComponent
  ],
  exports:[
      NavbarComponent,
      SlidershowComponent,
      PeliculasPosterGridComponent,
      CastSlideshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    RatingModule,
    PipesModule
  ]
})
export class ComponentsModule { }
