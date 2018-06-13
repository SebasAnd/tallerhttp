import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-moviestest',
  templateUrl: './moviestest.component.html',
  styleUrls: ['./moviestest.component.scss']
})
export class MoviestestComponent implements OnInit {
  movie_list: any[];
  constructor(private movies: MovieService) {
    this.movie_list = movies.get_items();
  }

  ngOnInit() {
  }

}
