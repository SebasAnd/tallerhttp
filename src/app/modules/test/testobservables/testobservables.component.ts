import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {ActorService} from '../services/actor.service';


@Component({
  selector: 'app-testobservables',
  templateUrl: './testobservables.component.html',
  styleUrls: ['./testobservables.component.scss']
})
export class TestobservablesComponent implements OnInit {

  actors: any;
  actorss: Observable<any>;
  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.actors =  this.actorService.get_items();
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
  this.actors =  this.actorService.get_items();
  this.actorss = this.actorService.getitems$();
  this.actorss.subscribe(() => {this.actors = this.actorService.get_items();});
  }

  add() {

    this.actorService.addItem('actorN');
  }
}
