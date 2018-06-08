import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Series } from '../models/series.model';
import { SeriesService } from '../../series/series.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	@Input() key: String;
	series$: Observable<Series[]>
	private searchTerms = new Subject<String>();

  constructor(private seriesService:SeriesService) { }

  ngOnInit(): void {
  	this.series$ = this.searchTerms.pipe(
  		debounceTime(300),

  		distinctUntilChanged(),

  		switchMap((term: string) => this.seriesService.searchSeries(this.key, term))
  	);
  }

  search(term: string): void {
  	this.searchTerms.next(term);
  }

}
