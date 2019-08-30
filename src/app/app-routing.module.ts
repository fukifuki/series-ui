import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthDetailComponent } from './user/auth-detail/auth-detail.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UpdateUserProfileFormComponent } from './users/update-user-profile-form/update-user-profile-form.component'
import { UserListComponent } from './users/user-list/user-list.component';
import { SeriesListComponent } from './series/series-list/series-list.component';
import { SeriesDetailComponent } from './series/series-detail/series-detail.component';
import { SeriesFormComponent } from './series/series-form/series-form.component';
import { UpdateSeriesFormComponent } from './series/update-series-form/update-series-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ 
		path: '', 
		component: DashboardComponent 
	},
	{ 
		path: 'admin', 
		component: AdminPanelComponent 
	},
	{ 
		path: 'sign-in', 
		component: SignInComponent 
	},
	{
		path: 'me',
		children: [
			{
				path: '',
				component: UserProfileComponent
			},
			{
				path: 'edit',
				component: UpdateUserProfileFormComponent
			}
		]
	},
	{
		path: 'users',
		children: [
			{
				path: '',
				component: UserListComponent
			},
			{
				path: ':id',
				component: AuthDetailComponent
			}
			// ,
			// {
			// 	path: ':id/edit',
			// 	component: UpdateUserDetailFormComponent
			// }
		]
	},
	{ 
		path: 'series', 
		children: [
			{ 
				path: '', 
				component: SeriesListComponent 
			},
			{ 
				path: 'new', 
				component: SeriesFormComponent 
			},
			{ 
				path: ':id', 
				component: SeriesDetailComponent 
			},
			{ 
				path: ':id/edit', 
				component: UpdateSeriesFormComponent 
			}
		]
	},

	// {
	// 	path: ':username',
	// 	component: UserProfileComponent 
	// },

	{ path: '**', 
		component: PageNotFoundComponent 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
