import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
import {map} from 'rxjs/internal/operators';
import {GenresDescriptor} from '../types/genresmovies';
import {ResponseDescriptor} from '../types/search.type';

@Injectable({
  providedIn: 'root'
})
export class SearchandetailService {



  private theMovieDbUrl = 'https://api.themoviedb.org/3/';
  private items$ = new Observable();

  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';
  private moviesURL: string;
  private url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=8230c7ea8cb40f6fd40f8851a920b7bf';
  private url2 = 'https://api.themoviedb.org/3/search/movie?api_key=8230c7ea8cb40f6fd40f8851a920b7bf&query=';

    constructor(private http: Http) {

    }
  search(term: string) {
    return this.http
      .get(this.url2 + term)
      .pipe(
        map((data) => {
          console.log(data.json());
          return ResponseDescriptor.import(data.json());
        })
      );
  }
  getAll() {
    return this.http
      .get(this.url)
      .pipe(
        map((data) => {
          return GenresDescriptor.import(data.json());
        })
      );
  }
    getsearchresult(required: string, query: string , page?: number) {
      if (page != null) {

        this.moviesURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey + '&page=' + page + '&query=' + query;
      }
      else {

        this.moviesURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey + '&query=' + query;
      }
      return this.http.get(this.moviesURL);
    }
  getdetails(required: string, id: number, page?: number ) {
    if (page != null) {

      this.moviesURL = this.theMovieDbUrl + 'movie/' + id + '?api_key=' + this.apiKey + '&page=' + page;
    }
    else {

      this.moviesURL = this.theMovieDbUrl + 'movie/' + id + '?api_key=' + this.apiKey;
    }
    console.log(this.http.get(this.moviesURL));
    return this.http.get(this.moviesURL);

  }
}
