import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Homepage/Homepage.component';
import { RegisterComponent } from './Register/Register.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Login/Login.component';
import { GrievancePageComponent } from './GrievancePage/GrievancePage.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';

@NgModule({
  declarations: [		
    AppComponent,
      HomepageComponent,
      RegisterComponent,LoginComponent,
      GrievancePageComponent,
      ContactUsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
