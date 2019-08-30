import { Injectable } from '@angular/core';

import { AuthApiService } from './auth-api.service';

import { AuthDetails } from '../shared/models/auth-details.model';

@Injectable({
  providedIn: 'root'
})
export class AuthDetailsService {

	authDetails: AuthDetails;

  constructor(private authApiService: AuthApiService) { }

  getAuthDetails(userId: number) {
  	this.authApiService.getAuthDetails(userId)
  		.subscribe(details => this.authDetails = details);
  }

  // get authDetails() {
  // 	return this._authDetails;
  // }

  // set authDetails(details: AuthDetails) {
  // 	this._authDetails = details;
  // }

}
