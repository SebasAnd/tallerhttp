import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchandetailService} from '../services/searchandetail.service';

@Component({
  selector: 'app-detailsmoviestest',
  templateUrl: './detailsmoviestest.component.html',
  styleUrls: ['./detailsmoviestest.component.scss']
})
export class DetailsmoviestestComponent implements OnInit {

  sub: any;
  movie: any;
  items: any;

  constructor(private route: ActivatedRoute, private moviedtails: SearchandetailService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {let id: number = params['id'];
      this.movie = this.moviedtails.getdetails('movie', id).subscribe((data: any) => this.items = {
        data: data.json()
      }); } );
  }

}
