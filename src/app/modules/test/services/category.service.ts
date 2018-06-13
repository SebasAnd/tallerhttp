import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private items: any[] = [{id: '9238457', name: 'Comedia'},
    {id: '94565464', name: 'Action'},
    {id: '0348992', name: 'Terror'},
    {id: '23847', name: 'adventure'}];
  constructor() { }
  get_items() {
    return this.items;
  }
  get(id: number) {
    return this.items[id];
  }
}
