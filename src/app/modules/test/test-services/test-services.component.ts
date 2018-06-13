import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../services/database.service';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.scss']
})
export class TestServicesComponent implements OnInit {
  movies: any;
  movies$: Observable<any>;
  public database: any = this.datab.db;
  constructor(private datab: DatabaseService) { }

  ngOnInit() {

    this.database =  this.datab.get_items();
    /* const MyObservable = Observable.create((observer: Observer<string>) => {setTimeout(() => {observer.next('mensaje1'); }, 2000);
     setTimeout(() => {observer.next('mensaje 2'); }, 4000);
       setTimeout(() => {observer.next('mensaje 3'); }, 6000);

     });
     MyObservable.subscribe(
       (data: string) => {
       console.log(data); },
       (data: string) => {
          console.log(data); },
       (data: string) => {
       console.log(data); });*/
    this.database =  this.datab.get_items();
    this.movies$ = this.datab.getitems$();
    this.movies$.subscribe(() => {this.database = this.datab.get_items(); });
  }

  add() {

    this.datab.modify_tiki();
  }

}
