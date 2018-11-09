import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {combineLatest} from "rxjs/operators";
import {compileBaseDefFromMetadata} from "@angular/compiler";

const apiKey = '38418dfa3551b99d1d817f4f30bd816f';

@Injectable()
export class MoviesService {

  path: string = 'https://api.themoviedb.org/3/';
  popular: string = 'discover/movie?sort_by=popularity.desc';
  authentication: string = '&api_key=';
  theaters: string = 'discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2018-10-22';
  kids: string ='discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  bestDramas: string = 'discover/movie?with_genres=18&primary_release_year=2018';
  movie:string = 'movie/';
  movieAuthentication: string = '?api_key=';

  constructor(private http: HttpClient) {
  }

  getPopular() {
    return this.http.get(`${this.path}${this.popular}${this.authentication}${apiKey}`)
  }

  getTheaters() {
    return this.http.get(`${this.path}${this.theaters}${this.authentication}${apiKey}`)
  }

  getKids() {
    return this.http.get(`${this.path}${this.kids}${this.authentication}${apiKey}`)
  }

  getBestDramas() {
    return this.http.get(`${this.path}${this.bestDramas}${this.authentication}${apiKey}`)
  }


  getMovie(id){
    return this.http.get(`${this.path}${this.movie}` + id + `${this.movieAuthentication}${apiKey}`)
  }

  findAMovie(myQuery){
    return this.http.get('https://api.themoviedb.org/3/search/movie?query='+ myQuery + "&api_key=" + apiKey)
  }

}
