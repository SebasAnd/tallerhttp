import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-httptest',
  templateUrl: './httptest.component.html',
  styleUrls: ['./httptest.component.scss']
})
export class HttptestComponent implements OnInit {
  movie_list: any;
  items: any;
  pageEvent: any;
  overview: any;
  ovstatus: any;
  constructor(private movieService: HttpService) {
  }

  showConfig(page?: number) {
    this.movie_list = this.movieService.getjson('movie/now_playing', page).subscribe((data: any) => this.items = {
      data: data.json().results.map((item) => {
        return {
          id: item.id,
          title: item.title,
          poster_path: item.poster_path
        };
      })
    });
  }
   ngOnInit() {
    this.showConfig();

  }
}


