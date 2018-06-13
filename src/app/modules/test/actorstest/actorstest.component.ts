import { Component, OnInit } from '@angular/core';
import {ActorService} from '../services/actor.service';


@Component({
  selector: 'app-actorstest',
  templateUrl: './actorstest.component.html',
  styleUrls: ['./actorstest.component.scss']
})
export class ActorstestComponent implements OnInit {

  actorlist: any[];
  actor: any;
  private sub: any;
  constructor(private actors: ActorService) {
    this.actorlist = actors.get_items();
  }

  ngOnInit() {
  }



}
