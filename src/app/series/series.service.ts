import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getSeriesById(id: number): Observable<Series> {
  	return this.http.get<Series>('/server/series/id');
  }

}
