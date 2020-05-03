import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { MeanappService } from './meanapp.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { SafePipe } from './safe.pipe';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { Header1Component } from './header1/header1.component';
import { Home1Component } from './home1/home1.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    DashboardComponent,
    AddcourseComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    ViewcourseComponent,
    CoursedetailsComponent,
    SafePipe,
    Header1Component,
    Home1Component,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [MeanappService],
  bootstrap: [AppComponent]
})
export class AppModule { }
