import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Series } from '../../shared/models/series.model';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-form',
  templateUrl: './series-form.component.html',
  styleUrls: ['./series-form.component.css']
})
export class SeriesFormComponent implements OnInit {

	seriesForm: FormGroup;
	series: Series;

// TODO get genres from the server instead
	genres: string[] = [
		'Action',
		'Adventure',
		'Comedy',
		'Drama',
		'Crime',
		'Horror' 
	]

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
  	// call something like genreService.getGenres() here
  	this.seriesForm = new FormGroup({
  		title: new FormControl(),
  		description: new FormControl(),
  		yearStarted: new FormControl(),
  		genreName: new FormControl()
  	});
  }

  onSubmit() {
  	this.series = this.seriesForm.value;
  	this.seriesService.createSeries(this.series)
      .subscribe((series) => this.series = series);
  	// this.seriesForm.reset();
  }

}
