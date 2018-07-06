import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { User } from '../../shared/models/user.model'
import { UserService } from '../user.service';  
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-update-user-profile-form',
  templateUrl: './update-user-profile-form.component.html',
  styleUrls: ['./update-user-profile-form.component.css']
})
export class UpdateUserProfileFormComponent implements OnInit {

	userForm: FormGroup;
	user: User;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
  	this.getUser();
  }

  getUser() {
		const id = this.authService.getUserId();
		this.userService.getUserById(id)
			.subscribe(user => { 
				this.user = user;
				this.userForm = new FormGroup({
					username: new FormControl(this.user.username),
					email: new FormControl(this.user.email)
				}); 
			});
  }

 	onSubmit() {
 		this.user.username = this.userForm.get('username').value;
 		this.user.email = this.userForm.get('email').value;
		this.userService.updateUser(this.user)
			.subscribe(() => console.log('User updated'));
 	}

}
