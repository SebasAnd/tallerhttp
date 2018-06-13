import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private items: any[] = [{
    id: 7878787,
    name: 'Jhonny Deep',
    nationality: 'United States',
    birthday: '12/12'
  }, {
    id: 9843535,
    name: 'Angelina jolie',
    nationality: 'United States',
    birthday: '06/07'
  }, {
    id: 7034430853,
    name: 'Actor3',
    nationality: 'United States',
    birthday: '03/03'
  }, {
    id: 53049853894,
    name: 'Actor4',
    nationality: 'United States',
    birthday: '04/04'
  }];
  private items$ = new Subject<any[]>();
  private theMovieDbUrl = 'https://api.themoviedb.org/3/';
  private items2 = new Observable();

  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';
  private moviesURL: string;
  constructor(private http: Http) { }
  get_items() {
    return this.items;
  }
  get(ids: number) {
    console.log('inicio' + ids);
    for (let i of this.items) {
      console.log('dentro del for viene ' + ids + ' compara con ' + i.id);
      console.log(i)
      if (ids == i.id) {
        console.log('son iguales ' + ids + 'a' + i.id);
        console.log(i);
        return i;
    }
  }}
  addItem(value: string) {
    this.items.push(value);
    this.items$.next(this.items);
  }
  getitems$() {
    return this.items$.asObservable();
  }

  getjson(required: string, page?: number ) {
    if (page != null) {

      this.moviesURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey + '&page=' + page;
    }
    else {

      this.moviesURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey;
    }
    return this.http.get(this.moviesURL);
  }
}
