import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlidershowComponent } from './slidershow/slidershow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';



@NgModule({
  declarations: [
    NavbarComponent, 
    SlidershowComponent, 
    PeliculasPosterGridComponent
  ],
  exports:[
      NavbarComponent,
      SlidershowComponent,
      PeliculasPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
