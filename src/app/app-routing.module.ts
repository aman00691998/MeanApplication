import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { Home1Component } from './home1/home1.component';





const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: Home1Component },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addcourse', component: AddcourseComponent },
  { path: 'view', component: ViewcourseComponent },
  { path: 'details/:id', component: CoursedetailsComponent },

  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
