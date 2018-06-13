import { Injectable } from '@angular/core';
import { CategoryService} from './category.service';
import {CountryService} from './country.service';
import {ActorService} from './actor.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private items: any[] = [
    {id: 'vnkjnjkvnsv',
      name: 'Deadpool',
      actors: [this.actors.get_items()[0], this.actors.get_items()[1]],
      categories: [this.CategoriesS.get_items()[0], this.CategoriesS.get_items()[1]] ,
      country: [this.country.get_items()[0]],
     rate: 4.9}
       ];
  constructor(private CategoriesS: CategoryService, private country: CountryService, private actors: ActorService) { }
  get_items() {
    return this.items;
  }
  get(id: number) {
    return this.items[id];
  }
}
