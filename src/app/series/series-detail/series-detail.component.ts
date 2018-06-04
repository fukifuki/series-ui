import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Series } from '../../shared/models/series.model';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {

	@Input() series: Series;

  constructor(
  	private route: ActivatedRoute,
  	private seriesService: SeriesService,
  	private location: Location
  ) {}

  ngOnInit(): void {
  	this.getSeries();
  }

  getSeries() {
  	const seriesId = +this.route.snapshot.paramMap.get('id');
  	this.seriesService.getSeriesById(seriesId)
  		.subscribe(series => this.series = series);
  }

  goBack(): void {
    this.location.back();
  }

}
