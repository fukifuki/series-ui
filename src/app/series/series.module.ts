import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SeriesListComponent } from './series-list/series-list.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SeriesFormComponent } from './series-form/series-form.component';
import { UpdateSeriesFormComponent } from './update-series-form/update-series-form.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SeriesListComponent, SeriesDetailComponent, SeriesFormComponent, UpdateSeriesFormComponent],
  exports: [
  	SeriesListComponent
  ]
})
export class SeriesModule { }
