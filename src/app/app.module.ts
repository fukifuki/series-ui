import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppSessionModule } from './app-session.module';
import { HttpInterceptorImpl } from './http-interceptor-impl';

import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';
import { SeriesModule } from './series/series.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminPanelComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppSessionModule,
    SharedModule,
    UserModule,
    UsersModule,
    SeriesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorImpl,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
