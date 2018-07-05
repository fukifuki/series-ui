import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from "rxjs/operators";

import { User } from '../shared/models/user.model';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers() {
  	return this.http.get<User[]>('server/users');
  }

  createUser(user: User) {
  	return this.http.post<User>('server/users', user, httpOptions)
  		.pipe(
  			map(res => {
  				return new User(res);	
  			})
  		)
  }

  updateUser(user: User) {
  	return this.http.put<User>(`server/users/${user.id}`, user, httpOptions)
  		.pipe(
  			map(res => {
  				return new User(res);
  			})
  		)
  }

  getUserById(id: number): Observable<User> {
  	return this.http.get<User>(`server/users/${id}`);
  }

  getLoggedInUser(): Observable<User> {
    return this.http.get<User>('server/me');
  }

  deleteUser(id: number) {
  	this.http.delete(`server/users/${id}`)
  		.subscribe(res => console.log('deleted'))
  }

}
