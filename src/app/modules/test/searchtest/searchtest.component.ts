import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HttpService} from '../services/http.service';
import {SearchandetailService} from '../services/searchandetail.service';
import {ActivatedRoute} from '@angular/router';
import {ResponseDescriptor} from '../types/search.type';

@Component({
  selector: 'app-searchtest',
  templateUrl: './searchtest.component.html',
  styleUrls: ['./searchtest.component.scss']
})
export class SearchtestComponent implements OnInit {
 /* movie_list: any;
  items: any;
  pageEvent: any;
  overview: any;
  ovstatus: any;
  sub: any;
  @Output() send: EventEmitter<ResponseDescriptor> = new EventEmitter();
  constructor(private movieService: SearchandetailService, private route: ActivatedRoute) {
  }

  showConfig(word?: string, page?: number) {
   // this.movie_list = this.movieService.getsearchresult('search/movie', word , page).subscribe((data: any) =>{
    this.movie_list = this.movieService.search(word).subscribe((data: any) => {
     // data : data.json().results;
      this.send.emit(data);
    });
  }
  ngOnInit() {

  }*/


  public term: string = 'amelie';
  public movies: any[];
  @Output() onSearch: EventEmitter<ResponseDescriptor> = new EventEmitter();

  constructor(
    private searchService: SearchandetailService
  ) { }

  ngOnInit() {
  }

  search() {
    this.searchService.search(this.term).subscribe(
      (data)=>{
        console.log(data);
        this.onSearch.emit(data);
      }
    );
  }


}
