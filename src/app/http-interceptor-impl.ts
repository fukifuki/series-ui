import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from './user/auth.service';
import { SessionService } from './user/session.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class HttpInterceptorImpl implements HttpInterceptor {

	constructor(private authService: AuthService) {}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		let authRequest = request;

		if (this.authService.isSignedIn()) {
			const accessToken = this.authService.getAccessToken();
			authRequest = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, `Bearer ${accessToken}`)});
		}
		
		return next.handle(authRequest);
	}
}
