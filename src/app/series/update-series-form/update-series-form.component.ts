import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Series } from '../../shared/models/series.model';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-update-series-form',
  templateUrl: './update-series-form.component.html',
  styleUrls: ['./update-series-form.component.css']
})
export class UpdateSeriesFormComponent implements OnInit {

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

  constructor(
  	private route: ActivatedRoute,
  	private location: Location,
  	private seriesService: SeriesService
  ) { }

  ngOnInit() {
    this.getSeries()
  	  .subscribe(series => { 
        this.series = series; 
        this.seriesForm = new FormGroup({
          title: new FormControl(this.series.title),
          description: new FormControl(this.series.description),
          yearStarted: new FormControl(this.series.yearStarted),
          genreName: new FormControl(this.series.genreName)
        });
      });
  }

  getSeries() {
  	const seriesId = +this.route.snapshot.paramMap.get('id');
  	return this.seriesService.getSeriesById(seriesId);
  		// .subscribe(series => { 
    //     this.series = series; 
    //     this.seriesForm = new FormGroup({
    //       title: new FormControl(this.series.title),
    //       description: new FormControl(this.series.description),
    //       yearStarted: new FormControl(this.series.yearStarted),
    //       genreName: new FormControl(this.series.genreName)
    //     })
    //   }); 
    //   });
  }

  onSubmit() {
    console.log(this.seriesForm.value);
    console.log(typeof this.seriesForm.value)
    this.series = this.seriesForm.value;
    this.series.id = +this.route.snapshot.paramMap.get('id');
    this.seriesService.updateSeries(this.series)
      .subscribe((series) => this.series = series);
  }

}
