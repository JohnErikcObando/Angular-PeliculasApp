import { Component, Input, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieResponse } from '../../interfaces/Movie-response';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-response';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieResponse;
  public cast : Cast[]=[];

  constructor(private activatedRoute: ActivatedRoute,
              private peliculasService: PeliculasService,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {
      
    const {id} = this.activatedRoute.snapshot.params;


    //imnplementacion de codigo mas limpio con los subcribe
    combineLatest([

      this.peliculasService.getPeliculaDetalle(id),
      this.peliculasService.getCast( id )

    ]).subscribe(([pelicula, cast]) =>{
      if(!pelicula){
            this.router.navigateByUrl('/home')
            return;
          }
          this.pelicula=pelicula;
          this.cast = cast.filter(actor => actor.profile_path !==null);
        // console.log(pelicula, cast);
    });
    
    //Forma nomal de los subscribe

    // this.peliculasService.getPeliculaDetalle(id).subscribe( movie =>{
    //   if(!movie){
    //     this.router.navigateByUrl('/home')
    //     return;
    //   }
    //   // console.log(movie);
    //   this.pelicula=movie;
      
    // });

    // this.peliculasService.getCast( id ).subscribe(cast => {
    //   console.log(cast);  
    //   this.cast = cast.filter(actor => actor.profile_path !==null);
    // });

  }

  onRegresar(){
    this.location.back();
  }

}
