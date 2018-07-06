import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [SearchComponent, HeaderComponent],
  exports: [SearchComponent, HeaderComponent]
})
export class SharedModule { }
