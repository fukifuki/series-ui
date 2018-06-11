import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

import { Series } from '../shared/models/series.model';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http:HttpClient) { }

  getSeries() {
  	return this.http.get<Series[]>('/server/series');
  }

  createSeries(series: Series): Observable<Series> {
    return this.http.post<Series>('/server/series', series, httpOptions)
      .pipe(
        map(res => {
          return new Series(res);
        })
      );
      // .subscribe(res => { console.log(res)},
      //            err => { console.log("Error occured!")});
  }

  getSeriesById(id: number): Observable<Series> {
  	return this.http.get<Series>(`/server/series/${id}`);
  }

  updateSeries(series: Series): Observable<Series> {
    console.log(series);
    return this.http.put<Series>(`/server/series/${series.id}`, series, httpOptions)
      .pipe(
        map(res => {
          return new Series(res);
        })
      );
  }

  searchSeries(key, value) {
  	value = value.trim();
  	const options = value ? { params: new HttpParams().set('search', `${key}:${value}`) } : {};

  	return this.http.get<Series[]>('/server/series', options);
  }

}
