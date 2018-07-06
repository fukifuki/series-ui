import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Auth } from '../shared/models/auth.model';
import { AuthDetails } from '../shared/models/auth-details.model';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http:HttpClient) { }

  public attemptAuth(username: string, password: string) {
  	return this.http.post<Auth>('/server/login', {username, password}, httpOptions);		
  }

  public getAuthDetails(id: number) {
  	return this.http.get<AuthDetails>(`/server/users/${id}/auth`);
  }

  public updateAuthDetails(id: number) {
  	// return this.http.put(`/server/users/${id}/auth`);
  }
}
