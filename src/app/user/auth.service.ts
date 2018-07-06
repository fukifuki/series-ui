import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { SessionService } from './session.service';
import { WindowRefService } from '../shared/window-ref.service';
import { AuthApiService } from './auth-api.service';

import { Auth } from '../shared/models/auth.model';
import { Session } from '../shared/models/session.model';
import { AuthDetails } from '../shared/models/auth-details.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private _authDetails: ReplaySubject<Auth> = new ReplaySubject<Auth>();

  // get authDetails(): Observable<Auth> {
  //   return this._authDetails.asObservable();
  // }

  private _authDetails: AuthDetails;

  constructor(private jwtHelper: JwtHelperService, 
              private sessionService: SessionService,
              private authApi: AuthApiService
  ) { }

  public signIn(auth: Auth) {  	
    if (!auth) {
  		return;
  	}
    console.log("sign in called");
  	this.sessionService.save(auth);

    console.log("user id from auth signIn()", auth.userId);
    this.authApi.getAuthDetails(auth.userId)
      .subscribe(
        (details) => { 
           console.log("Auth details: ", details);
           this.authDetails = details 
         });
  }

  public signOut(): void {
  	this.sessionService.delete();
  }

  public isSignedIn():boolean {
    const auth = this.sessionService.get();
    console.log(auth);
    if (auth) {
      // return !this.jwtHelper.isTokenExpired(session.accessToken);
      return true;
    }
    return false;  
  }

  public getAccessToken(): string {
    return this.sessionService.get().token;
  }

  public getUserId(): number {
    return this.sessionService.get().userId
  }

//   public getUsername():string {
//     const session = this.sessionService.get();
//     return session.username; 
//   }

//   public getAccessToken():string {
//     const session = this.sessionService.get();
//     console.log("session", session);
//     console.log("access token: ", session.accessToken);
//     return session.accessToken;
//   }

// // mehtod like this should probabily be called only once immediately after user logs in
//   public getRole(): string {
//     // if (this.sessionService.get()) {
//       const username = this.sessionService.get().username;
//       const authDetails = this.authApi.getAuthDetails(username);
//       return authDetails.role;
//     // }
//   }

  get authDetails() {
    return this._authDetails;
  }

  set authDetails(authDetails: AuthDetails) {
    this._authDetails = authDetails;
  }
}
 