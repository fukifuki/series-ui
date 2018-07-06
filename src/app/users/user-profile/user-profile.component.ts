import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../../shared/models/user.model';
import { UserService } from '../user.service';
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

	user: User;

  constructor(
  	private router: Router,
  	private route: ActivatedRoute,
  	private location: Location,
  	private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  	this.getUser();
  }

  getUser() {
    const id = this.authService.getUserId();
  	this.userService.getUserById(id)
  		.subscribe(user => this.user = user);
  }

  deleteAccount() {
    const id = this.authService.getUserId();
  	this.userService.deleteUser(id);
  	// redirect according to a role
  		// if ADMIN go back to user list or admin panel
  		// if USER go to sign up page or maybe to some kind of goodbye page... 
  }

  goEdit() {
  	this.router.navigate(['me', 'edit']);
  }

  goBack() {
  	this.location.back();
  }
}






