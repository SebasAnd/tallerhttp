import { Component, OnInit } from '@angular/core';
import {ResponseDescriptor} from '../types/search.type';
import {GenresDescriptor} from '../types/genresmovies';
import {SearchandetailService} from '../services/searchandetail.service';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.scss']
})
export class ShowallComponent implements OnInit {

  public data: ResponseDescriptor = new ResponseDescriptor();
  public genres: GenresDescriptor = new GenresDescriptor();

  constructor (
    private genresService: SearchandetailService
  ){ }

  ngOnInit() {
    this.genresService.getAll().subscribe(
      (data) => {
        this.genres = data;
      }
    );
  }

  onSearch(data:ResponseDescriptor) {
    this.data = data;
  }

}
