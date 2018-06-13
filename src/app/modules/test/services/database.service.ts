import { Injectable } from '@angular/core';
import {ActorService} from './actor.service';
import {MovieService} from './movie.service';
import {CategoryService} from './category.service';
import {CountryService} from './country.service';
import {Subject,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private actorsService: ActorService, private movieService: MovieService, private categoryService: CategoryService, private countryService: CountryService) { }
  public db$ = new Subject<any[]>();
  public rank = 0;
  public db: any [] = [{
    movie1: this.movieService.get(0),
    actor: [this.actorsService.get(0), this.actorsService.get(1)],
    category: [this.categoryService.get(0), this.categoryService.get(3)],
    country: this.countryService.get(0),
    ranking: this.rank
  },{
    movie1: this.movieService.get(0),
    actor: [this.actorsService.get(0), this.actorsService.get(1)],
    category: [this.categoryService.get(0), this.categoryService.get(3)],
    country: this.countryService.get(0),
    ranking: this.rank
  },
    {
      movie1: this.movieService.get(0),
      actor: [this.actorsService.get(0), this.actorsService.get(1)],
      category: [this.categoryService.get(0), this.categoryService.get(3)],
      country: this.countryService.get(0),
      ranking: this.rank
    },
    {
      movie1: this.movieService.get(0),
      actor: [this.actorsService.get(0), this.actorsService.get(1)],
      category: [this.categoryService.get(0), this.categoryService.get(3)],
      country: this.countryService.get(0),
      ranking: this.rank
    },
    {
      movie1: this.movieService.get(0),
      actor: [this.actorsService.get(0), this.actorsService.get(1)],
      category: [this.categoryService.get(0), this.categoryService.get(3)],
      country: this.countryService.get(0),
      ranking: this.rank
    }
    ,{
      movie1: this.movieService.get(0),
      actor: [this.actorsService.get(0), this.actorsService.get(1)],
      category: [this.categoryService.get(0), this.categoryService.get(3)],
      country: this.countryService.get(0),
      ranking: this.rank
    },
    {
      movie1: this.movieService.get(0),
      actor: [this.actorsService.get(0), this.actorsService.get(1)],
      category: [this.categoryService.get(0), this.categoryService.get(3)],
      country: this.countryService.get(0),
      ranking: this.rank
    }];
  get_items() {
    return this.db;
  }
  getitems$() {
    return this.db$.asObservable();
  }
  modify_tiki() {
    for(let i of this.db) {
      if (i.ranking >= 0 && i.ranking < 30000000) {
        i.ranking = i.ranking + 1;
      }
      this.db$.next(this.db);

        //console.log(i.ranking);
      }
      //console.log(this.rank);
  }
}
