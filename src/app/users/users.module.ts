import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from '../app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateUserProfileFormComponent } from './update-user-profile-form/update-user-profile-form.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UserListComponent, UserProfileComponent, UpdateUserProfileFormComponent],
  exports: [UserListComponent]
})
export class UsersModule { }
