import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SeriesListComponent } from './series/series-list/series-list.component';
import { SeriesDetailComponent } from './series/series-detail/series-detail.component';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'series', component: SeriesListComponent },
	{ path: 'series/:id', component: SeriesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
