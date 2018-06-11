import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SeriesListComponent } from './series/series-list/series-list.component';
import { SeriesDetailComponent } from './series/series-detail/series-detail.component';
import { SeriesFormComponent } from './series/series-form/series-form.component';
import { UpdateSeriesFormComponent } from './series/update-series-form/update-series-form.component';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'series', component: SeriesListComponent },
	{ path: 'series/new', component: SeriesFormComponent },
	{ path: 'series/:id', component: SeriesDetailComponent },
	{ path: 'series/:id/edit', component: UpdateSeriesFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
