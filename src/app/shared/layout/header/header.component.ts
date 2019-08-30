import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../user/auth.service';
import { AuthDetailsService } from '../../../user/auth-details.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, 
  						private authService: AuthService,
              private authDetailsService: AuthDetailsService
  ) {}

  ngOnInit() {}

  signIn() {
  	this.router.navigate(['sign-in']);
  }

  signOut(): void {
  	this.authService.signOut();
  	this.router.navigate(['sign-in']);
  }

  isSignedIn(): boolean {
  	return this.authService.isSignedIn();
  }

  authDetailsAvailable(): boolean {
    return this.authDetailsService.authDetails != null;
  }

  getUsername(): string {
    console.log("authDetails from authService: ", this.authService.authDetails)
    // return this.authService.authDetails.username;
    return this.authService.authDetails.username;
  }

}
