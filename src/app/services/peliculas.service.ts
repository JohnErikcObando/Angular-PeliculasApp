import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';

import { tap, map, catchError } from 'rxjs/operators';
import { MovieResponse } from '../interfaces/Movie-response';
import { Cast, CreditsReponse } from '../interfaces/credits-response';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando:boolean=false;

  constructor( private http: HttpClient) { }

  get params(){
    return{
      api_key:'da13182767a3c771fa0ae8471b0ef919',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }

  resetCarteleraPage(){
    this.carteleraPage = 1;
  }

  // getCartelera():Observable<CarteleraResponse>{   
  getCartelera():Observable<Movie[]> {
  
      if ( this.cargando ) {
        // cargando peliculas
        return of([]);
      }
  
  
      this.cargando = true;
      return this.http.get<CarteleraResponse>(`${ this.baseUrl }/movie/now_playing`,{
        params: this.params
      }).pipe(
        map( (resp) => resp.results ),
        tap( () => {
          this.carteleraPage += 1;
          this.cargando = false;
        })
      );
    }
  
    buscarPeliculas(texto: string):Observable<Movie[]>{
      
      const params = { ...this.params, page: '1', query: texto };
  
      return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`,{
        params
      }).pipe(
        map(resp=> resp.results)
      )
    }


    getPeliculaDetalle(id:string){
      
      return this.http.get<MovieResponse>(`${ this.baseUrl }/movie/${id}`,{
        params: this.params
      }).pipe(
        catchError(err => of(null))
      )
    }

    getCast(id:string):Observable<Cast[]>{
      
      return this.http.get<CreditsReponse>(`${ this.baseUrl }/movie/${id}/credits`,{
        params: this.params
      }).pipe(
        map(resp => resp.cast),
        catchError(err => of([]))
      )
    }
}