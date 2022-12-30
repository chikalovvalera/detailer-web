import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './component/home_page/home/home.component';
import { MainComponent } from './component/home_page/main/main.component';
import { ServiceComponent } from './component/home_page/service/service.component';
import { BookingComponent } from './component/home_page/booking/booking.component';
import { GalleryComponent } from './component/home_page/gallery/gallery.component';
import { ContactComponent } from './component/home_page/contact/contact.component';

import { LoginPageComponent } from './component/_login_page/login-page/login-page.component';


import { ScrollDownComponent } from './component/scroll-down/scroll-down.component';
import { from } from 'rxjs';


const appRoutes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }, 
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    BookingComponent,
    GalleryComponent,
    ContactComponent,
    ScrollDownComponent,
    MainComponent,
    LoginPageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


    NgbModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
