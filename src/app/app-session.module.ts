import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
	return localStorage.getItem('accessToken');
}

@NgModule({
  imports: [
    CommonModule,
    JwtModule.forRoot({
    	config: {
    		tokenGetter: tokenGetter
    	}
    })
  ],
  exports: [JwtModule]
})
export class AppSessionModule { }
