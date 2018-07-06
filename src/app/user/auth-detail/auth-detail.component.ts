import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuthApiService } from '../auth-api.service';
import { UserService } from '../../users/user.service';

import { AuthDetails } from '../../shared/models/auth-details.model'


@Component({
  selector: 'app-auth-detail',
  templateUrl: './auth-detail.component.html',
  styleUrls: ['./auth-detail.component.css']
})
export class AuthDetailComponent implements OnInit {

	authDetails: AuthDetails;

  constructor(private router: Router,
  						private route: ActivatedRoute,
  						private location: Location,
  						private authApiService: AuthApiService,
  						private usersApiService: UserService) {}

  ngOnInit() {
  	this.getAuthDetails();
  }

  getAuthDetails(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.authApiService.getAuthDetails(id)
  		.subscribe(details => this.authDetails = details);
  }

  deleteAccount() {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.usersApiService.deleteUser(id);
  	this.location.back();
  }

  goEditAccountSettings() {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.router.navigate(['users', id, 'edit']);
  }

  goBack() {
  	this.location.back();
  }
//// TODO: move user id retrival into separate method>>> 
  // private getUserId() {

  // }

}
