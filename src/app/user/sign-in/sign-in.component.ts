import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthApiService } from '../auth-api.service';
import { AuthService } from '../auth.service';

import { Session } from '../../shared/models/session.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

	public signInForm: FormGroup;

  constructor(
  	private formBuilder: FormBuilder,
  	private router: Router,
  	private authApiService: AuthApiService,
  	private authService: AuthService
  ) { 
  	this.signInForm = formBuilder.group({
  		username: ['', Validators.required],
  		password: ['', Validators.required]
  	});
  }

  ngOnInit() { }

  signIn() {
		const username = this.signInForm.get('username').value;
  	const password = this.signInForm.get('password').value;

  	this.authApiService.attemptAuth(username, password)
  		.subscribe(
        (auth) => {
          this.authService.signIn(auth);
  				this.router.navigate(['']);
  		  },
        err => console.log('cannot authenticate')
     )
  }

}
