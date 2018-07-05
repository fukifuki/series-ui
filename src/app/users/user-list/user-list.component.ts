import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/models/user.model';
import { UserService } from '../../users/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.getUsers();
  }

  getUsers() {
  	this.userService.getUsers()
  		.subscribe(users => this.users = users);
  }
}
