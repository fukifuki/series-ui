import { Component, OnInit, Input } from '@angular/core';

// TODO >>> import models the right way!!!
import { Series } from '../../shared/models/series.model';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

	series: Series[];

  @Input() title: string;

  constructor(private seriesService:SeriesService) { }

  ngOnInit() {
  	this.getSeries();
  }

  getSeries() {
  	this.seriesService.getSeries()
      .subscribe(series => this.series = series);
  }
}
