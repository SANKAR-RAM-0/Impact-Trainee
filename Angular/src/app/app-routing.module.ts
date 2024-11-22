import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrievancePageComponent } from './GrievancePage/GrievancePage.component';
import { HomepageComponent } from './Homepage/Homepage.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';

const routes: Routes = [
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:'Home',
    component:HomepageComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'Grievance filling page',
    component:GrievancePageComponent
  },
  {
    path:'ContactUs',
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
