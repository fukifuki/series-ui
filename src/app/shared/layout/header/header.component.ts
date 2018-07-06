import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../user/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, 
  						private authService: AuthService
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

  getUsername(): string {
    console.log("authDetails from authService: ", this.authService.authDetails)
    // return this.authService.authDetails.username;
    return this.authService.authDetails.username;
  }

}
