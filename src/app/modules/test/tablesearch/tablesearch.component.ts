import { Component, OnInit, Input} from '@angular/core';
import {ResponseDescriptor} from '../types/search.type';
import {GenresDescriptor} from '../types/genresmovies';


@Component({
  selector: 'app-tablesearch',
  templateUrl: './tablesearch.component.html',
  styleUrls: ['./tablesearch.component.scss']
})
export class TablesearchComponent implements OnInit {
  @Input() public data: ResponseDescriptor;

  @Input() public genres: GenresDescriptor = new GenresDescriptor();

  constructor() {
  }

  ngOnInit() {

  }

}
