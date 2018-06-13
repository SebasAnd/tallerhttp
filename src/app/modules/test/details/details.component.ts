import { Component, OnInit } from '@angular/core';
import {ActorService} from '../services/actor.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  actorlist: any[];
  actor: any;
  private sub: any;
  constructor(private actors: ActorService , private route: ActivatedRoute) {
    this.actorlist = actors.get_items();
  }

  ngOnInit() {
    this.showactor();
  }

  showactor() {
    this.sub = this.route.params.subscribe(params => {let id: number = params['id'];
      this.actor = this.actors.get(id); } );
    console.log(this.actor);
  }


}
