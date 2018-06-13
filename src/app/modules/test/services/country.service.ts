import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private items: string[] = ['United states', 'Colombia', 'Francia', 'Alemania'];
  constructor() { }
  get_items() {
    return this.items;
  }
  get(id: number) {
    return this.items[id];
  }
}
