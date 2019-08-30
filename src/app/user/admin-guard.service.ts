import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';
import { AuthApiService } from './auth-api.service'; 

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private auth:AuthService, private usersApi: AuthApiService) { }

  canActivate(): boolean {
  	// const username = this.auth.getSignedInUser();
  	// const currentUser = this.usersApi.
  	// if (this.auth.getSignedInUser)
  	return true;
  }


}
