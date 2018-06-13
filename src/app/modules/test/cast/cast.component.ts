import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit {
  sub: any;
  movie_list: any;
  items: any;
  pageEvent: any;
  overview: any;
  ovstatus: any;

  constructor(private movieService: HttpService, private route: ActivatedRoute) {
  }

  showConfig(page?: number) {
    this.movie_list = this.movieService.getjson('movie/now_playing', page).subscribe((data: any) => this.items = {
      data: data.json().results.map((item) => {
        console.log(item);
        return {
          id: item.id,
          title: item.title,
        };
      })
    });
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id: number = params['id'];
      this.movie_list = this.movieService.getjson('movie/' +id+ '/credits').subscribe((data: any) => this.items = {
        data: data.json()
      });
    });
  }
}
